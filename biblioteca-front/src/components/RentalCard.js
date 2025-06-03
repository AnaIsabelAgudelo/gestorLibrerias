// src/components/RentalCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const RentalCard = ({ userName, bookTitle, date, image }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex align-items-center">
        <img
          src={image}
          alt={bookTitle}
          className="rounded-circle me-3"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
        <div>
          <Card.Title>{bookTitle}</Card.Title>
          <Card.Text className="mb-1"><strong>Usuario:</strong> {userName}</Card.Text>
          <Card.Text className="text-muted"><strong>Fecha:</strong> {date}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RentalCard;
