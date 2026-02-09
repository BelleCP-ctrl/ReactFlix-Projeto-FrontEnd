import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CardFilme from './Components/CardFilme';

function App() {
  const [nomeBusca, setNomeBusca] = useState('');
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // tradução manual para gêneros
  const traduzirTermos = (texto) => {
    if (!texto) return "Desconhecido";
    return texto
      .replace("Action", "Ação")
      .replace("Adventure", "Aventura")
      .replace("Comedy", "Comédia")
      .replace("Drama", "Drama")
      .replace("Horror", "Terror")
      .replace("Sci-Fi", "Ficção Científica")
      .replace("Animation", "Animação")
      .replace("Documentary", "Documentário")
      .replace("Fantasy", "Fantasia")
      .replace("Romance", "Romance")
      .replace("Thriller", "Suspense")
      .replace("Crime", "Policial")
      .replace("Mystery", "Mistério")
      .replace("N/A", "Não Disponível");
  };

  const buscarFilme = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro(null);
    setFilme(null);

    try {
      const chaveApi = "7de8b53c";
      
      // 1. Busca os dados do filme (em Inglês)
      const resposta = await fetch(`https://www.omdbapi.com/?t=${nomeBusca}&apikey=${chaveApi}`);
      const dados = await resposta.json();

      if (dados.Response === "True") {
        
        //INÍCIO DE TRADUÇÃO DA SINOPSE
        try {
          // Só traduz se tiver sinopse
          if (dados.Plot && dados.Plot !== "N/A") { 
            const respostaTraducao = await fetch(
              `https://api.mymemory.translated.net/get?q=${encodeURIComponent(dados.Plot)}&langpair=en|pt-br`
            );
            const dadosTraducao = await respostaTraducao.json();
            
            // Substitui o texto em inglês pelo traduzido
            dados.Plot = dadosTraducao.responseData.translatedText;
          }
        } catch (erroTraducao) {
          console.warn("Falha na tradução, exibindo original:", erroTraducao);
        }
        //FIM DA TRADUÇÃO DA SINOPSE

        // Traduz os gêneros manualmente usando o dicionário
        dados.Genre = traduzirTermos(dados.Genre);
        
        setFilme(dados);
      } else {
        setErro("Filme não encontrado! Tente o nome original em inglês.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErro("Erro de conexão. Verifique sua internet.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container 
      className="py-5" 
      style={{ 
        maxWidth: '800px', 
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '15px',
        marginTop: '50px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <header className="text-center mb-5">
        <h1 className="fw-bold text-primary">🎬 ReactFlix</h1>
        <p className="text-muted">Encontre informações sobre seus filmes favoritos</p>
      </header>

      <Form onSubmit={buscarFilme} className="d-flex gap-2 mb-4">
        <Form.Control
          type="text"
          placeholder="Digite o nome do filme..."
          value={nomeBusca}
          onChange={(e) => setNomeBusca(e.target.value)}
          size="lg"
        />
        <Button variant="primary" type="submit" size="lg" disabled={carregando}>
          {carregando ? <Spinner animation="border" size="sm" /> : "Buscar"}
        </Button>
      </Form>

      {erro && <Alert variant="danger">{erro}</Alert>}
      {filme && <CardFilme dados={filme} />}
      
    </Container>
  );
}

export default App;