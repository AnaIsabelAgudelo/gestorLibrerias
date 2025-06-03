import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import Rentals from './pages/Rentals';

// Estas vistas puedes crearlas después
const Books = () => <Home />; // Puedes crear Books.js luego, ahora apunta a Home.js

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </Router>
  );
}

export default App;
