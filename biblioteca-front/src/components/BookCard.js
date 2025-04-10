import React from 'react';
import { Card } from 'react-bootstrap';

const BookCard = ({ title, description, image }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
