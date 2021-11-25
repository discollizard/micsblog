import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Container } from './components/container';
import { Paintings } from './components/paintings';
import { Contact } from './components/contact';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="art gallery" caption="itsa me mario"/>
        <Navbar paintingsAlias="Paintings" />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/about" element={<AboutMe />} />
            <Route path="/paintings" element={<Paintings />} />    
            <Route path="/contact" element={<Contact />} />    
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
