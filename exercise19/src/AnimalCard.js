import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, Button } from 'react-bootstrap';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
  image
}) {
  return (
    <Card className="bg-warning border-0 shadow-sm" style={{ width: '20rem' }}>
      <div style={{ height: '230px', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-danger fw-bold fs-2 mb-3">{name}</Card.Title>
        <ListGroup variant="flush" className="mb-3 rounded overflow-hidden">
          <ListGroup.Item className="py-2">
            Scientific Name: {scientificName}
          </ListGroup.Item>
          <ListGroup.Item className="py-2">
            {size} kg
          </ListGroup.Item>
          <ListGroup.Item className="py-2">
            {diet.join(', ')}.
          </ListGroup.Item>
        </ListGroup>
        <div className="text-center mt-auto">
          <Button 
            variant="danger" 
            className="w-100 fw-bold py-2"
            onClick={() => showAdditional(additional)}
          >
            More Info
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};