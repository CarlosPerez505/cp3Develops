import logo from './logo.svg';
import './App.css';
import Cbr from './cbr.jpeg';
import {Container, Card, Row, Col, Image, Carousel, } from "react";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={Cbr} className="App-cbr" alt="cbr" />
          <Container>
              <p>
                  Happy Birthday
              </p>
          </Container>
        <p>
          Good morning React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
