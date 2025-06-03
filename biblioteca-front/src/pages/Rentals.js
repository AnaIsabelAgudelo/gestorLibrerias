// src/pages/Rentals.js
import React from 'react';
import RentalCard from '../components/RentalCard';
import { Container, Row, Col } from 'react-bootstrap';

const rentals = [
  {
    userName: 'Carlos Ramírez',
    bookTitle: 'Cien años de soledad',
    date: '2025-06-01',
    image: 'https://phantom-telva.uecdn.es/4c75f2f9592914cd2676bc661e4f25eb/crop/0x34/799x514/resize/828/f/webp/assets/multimedia/imagenes/2020/12/10/16075997705699.jpg',
  },
  {
    userName: 'Laura Gómez',
    bookTitle: 'El Principito',
    date: '2025-05-30',
    image: 'https://www.ahorasanjuan.com/wp-content/uploads/2021/08/principito.jpg',
  },
  {
    userName: 'Sofía Pérez',
    bookTitle: 'La Odisea',
    date: '2025-06-02',
    image: 'https://profesorplans.com/wp-content/uploads/2018/11/ulises-pretendientes.jpg?w=980&h=505&crop=1',
  },
];

const Rentals = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Alquileres</h1>
      <Row>
        {rentals.map((rental, index) => (
          <Col key={index} md={4} className="mb-4">
            <RentalCard {...rental} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rentals;
