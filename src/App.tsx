import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Container } from './components/container';
import { Paintings } from './components/paintings';
import { Contact } from './components/contact';
import './styles/global.scss';
import "./misc/coolStuff";
import {pickRandomQuote} from "./misc/quotes";




function App() {
  
  let [quote, setQuote] = useState(pickRandomQuote())
  let [title, setTitle] = useState('Art Gallery')

  let titleSur = (document.getElementById("titleSurrogate") as HTMLInputElement)
  titleSur?.addEventListener('change', () =>  setTitle((window as any).title))

  useEffect(() => {
    setQuote(pickRandomQuote())
  }, [])

  return (
    <Router>
      <div className="App">
        <input 
          type="hidden" 
          value={title} 
          id="titleSurrogate"
          onChange={() => setTitle((window as any).title)}
        />
        <Header title={title} caption={quote}/>
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
