import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
