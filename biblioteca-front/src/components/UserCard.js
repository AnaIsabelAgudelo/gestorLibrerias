import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = ({ name, image }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex align-items-center">
        <img
          src={image}
          alt={name}
          className="rounded-circle"
          style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' }}
        />
        <h5 className="mb-0">{name}</h5>
      </Card.Body>
    </Card>
  );
};


export default UserCard;
