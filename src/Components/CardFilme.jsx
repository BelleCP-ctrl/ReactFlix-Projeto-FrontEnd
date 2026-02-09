import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";

function CardFilme({ dados }) {
  return (
    <Card className="mt-4 shadow-lg border-0">
      <Row className="g-0">
        <Col md={4}>
          <Card.Img
            src={
              dados.Poster !== "N/A"
                ? dados.Poster
                : "https://via.placeholder.com/300x450?text=Sem+Imagem"
            }
            alt={dados.Title}
            style={{ height: "100%", objectFit: "cover", minHeight: "300px" }}
          />
        </Col>

        <Col md={8}>
          <Card.Body>
            <Card.Title className="display-6 fw-bold">{dados.Title}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              {dados.Year} • {dados.Runtime}
            </Card.Subtitle>

            <div className="mb-3">
              <Badge bg="warning" text="dark" className="me-2">
                IMDb: {dados.imdbRating}
              </Badge>
              <Badge bg="secondary">{dados.Genre}</Badge>
            </div>

            <Card.Text>
              <strong>Sinopse:</strong> {dados.Plot}
            </Card.Text>
            <Card.Text>
              <strong>Diretor:</strong> {dados.Director}
            </Card.Text>
            <Card.Text>
              <strong>Atores:</strong> {dados.Actors}
            </Card.Text>

            {dados.Awards !== "N/A" && (
              <small className="text-success fw-bold">
                🏆 Prêmios: {dados.Awards}
              </small>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardFilme;
