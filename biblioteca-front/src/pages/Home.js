import React from 'react';
import BookCard from '../components/BookCard';
import { Container, Row, Col } from 'react-bootstrap';

const books = [
  {
    title: 'Cien años de soledad',
    description: 'Una obra maestra de Gabriel García Márquez que narra la historia de la familia Buendía.',
    image: 'https://phantom-telva.uecdn.es/4c75f2f9592914cd2676bc661e4f25eb/crop/0x34/799x514/resize/828/f/webp/assets/multimedia/imagenes/2020/12/10/16075997705699.jpg',
  },
  {
    title: 'La Odisea',
    description: 'Odiseo es un héroe griego que aparece en la Ilíada y en La Odisea de Homero. Es conocido por su inteligencia, astucia y valentía.',
    image: 'https://profesorplans.com/wp-content/uploads/2018/11/ulises-pretendientes.jpg?w=980&h=505&crop=1',
  },
  {
    title: 'El Principito',
    description: 'Una fábula poética de Antoine de Saint-Exupéry que nos recuerda lo esencial de la vida.',
    image: 'https://www.ahorasanjuan.com/wp-content/uploads/2021/08/principito.jpg',
  },
];

const Home = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Bienvenido a la Biblioteca</h1>
      <Row>
        {books.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            <BookCard {...book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
