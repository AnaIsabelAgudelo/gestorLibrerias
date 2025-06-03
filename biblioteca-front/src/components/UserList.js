import React, { useState } from 'react';
import UserCard from './UserCard';
import { Container, Card, Button } from 'react-bootstrap';

const users = [
  {
    name: 'Carlos Ramírez',
    image: 'https://cdn-icons-png.flaticon.com/128/4140/4140037.png',
    bio: 'Carlos es bibliotecario con más de 10 años de experiencia en gestión de colecciones.',
  },
  {
    name: 'Laura Gómez',
    image: 'https://cdn-icons-png.flaticon.com/128/4140/4140060.png',
    bio: 'Laura es amante de la literatura clásica y dirige clubes de lectura.',
  },
  {
    name: 'Andrés Ruiz',
    image: 'https://cdn-icons-png.flaticon.com/128/4140/4140039.png',
    bio: 'Andrés es voluntario en la biblioteca local y coordina eventos para jóvenes lectores.',
  },
  {
    name: 'Sofía Pérez',
    image: 'https://cdn-icons-png.flaticon.com/128/4140/4140047.png',
    bio: 'Sofía es amante de los animales y le encanta leer acerca de ellos.',
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container className="py-4">
      {selectedUser ? (
        <Card className="shadow-lg">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <img
                src={selectedUser.image}
                alt={selectedUser.name}
                className="rounded-circle"
                style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '20px' }}
              />
              <div>
                <h4>{selectedUser.name}</h4>
                <p className="text-muted">{selectedUser.bio}</p>
              </div>
            </div>
            <Button variant="secondary" onClick={() => setSelectedUser(null)}>
              Volver a la lista
            </Button>
          </Card.Body>
        </Card>
      ) : (
        users.map((user, index) => (
          <div key={index} onClick={() => setSelectedUser(user)} style={{ cursor: 'pointer' }}>
            <UserCard name={user.name} image={user.image} />
          </div>
        ))
      )}
    </Container>
  );
};

export default UserList;
