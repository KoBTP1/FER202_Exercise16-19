import React from 'react';
import AnimalCard from './AnimalCard';
import animals from './data';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const showAdditionalData = (additional) => {
    const text = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(text);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 fw-bold text-dark fs-1">Animals</h1>
      
      <Row className="justify-content-center g-4">
        {animals.map((animal) => (
          <Col key={animal.name} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <AnimalCard
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              additional={animal.additional}
              image={animal.image}
              showAdditional={showAdditionalData}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;