🎬 ReactFlix

Um buscador de filmes imersivo com tradução automática de sinopses.

💻 Sobre o Projeto

O ReactFlix é uma aplicação web desenvolvida como projeto de conclusão do curso de Desenvolvimento Frontend com React.

O objetivo foi criar uma interface moderna e responsiva que consome múltiplas APIs para fornecer informações detalhadas sobre filmes. O grande diferencial deste projeto é a integração de um serviço de tradução, tornando o conteúdo acessível para utilizadores que não dominam o inglês.

✨ Funcionalidades

🔍 Busca em Tempo Real: Pesquise filmes pelo título.

📄 Detalhes Completos: Exibe pôster, ano de lançamento, género, duração e prémios.

🇧🇷 Tradução Automática: A sinopse (Plot) original em inglês é traduzida automaticamente para Português utilizando a MyMemory API.

🎨 Interface Imersiva: Design "Dark Mode" com background temático e efeitos de vidro (Glassmorphism).

⏳ Feedback Visual: Indicadores de carregamento (spinners) durante as requisições.

⚠️ Tratamento de Erros: Mensagens amigáveis caso o filme não seja encontrado ou haja falha na rede.

🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

React - Biblioteca JavaScript para construção de interfaces.

React Bootstrap - Framework de estilização e componentes.

CSS3 - Estilização personalizada (Backgrounds, Transparências, Sombras).

Hooks - Controle de estado e ciclo de vida (useState, useEffect).

APIs Integradas

OMDb API: Fonte de dados dos filmes.

MyMemory Translation API: Serviço de tradução das sinopses.

A aplicação será aberta na porta: http://localhost:3000 (ou a porta indicada no terminal).

🧩 Estrutura do Código

O projeto segue uma arquitetura baseada em componentes funcionais:

App.jsx: Componente principal. Gerencia os estados (nomeBusca, filme, carregando, erro) e contém a lógica de chamada sequencial das APIs (Busca -> Tradução).

components/CardFilme.jsx: Componente de apresentação. Responsável por renderizar os dados do filme com o estilo visual do projeto.


👩‍💻 Autora

Isabelle Christina Pantoja dos Santos

Projeto desenvolvido para fins educacionais.
