import './App.css';
import Cbr from './cbr.jpeg';
import Github from 'github.png';






function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="first-nav">
              <div className="container">
                  <nav className="first-nav__links">
                  </nav>
                  <a className="first-nav__navcontrol icon icon_menu js-navcontrol" href="#">Menu</a></div>
          </div>
          <div className="second-nav js-nav">
              <div className="container"><a className="second-nav__logo"><span>CP3</span></a>
                  <nav className="menu">
                      <ul>
                          <li><a className="js-link js-anchor is-selected" href="#home">Home</a></li>
                          <li><a className="js-link js-anchor" href="#about">About</a></li>
                          <li><a className="js-link js-anchor" href="#services">Services</a></li>
                          <li><a className="js-link js-anchor" href="#process">Process</a></li>
                          <li><a className="js-link js-anchor" href="#projects">Projects</a></li>
                          <li><a className="js-link js-anchor" href="#contacts">Contacts</a></li>
                      </ul>
                  </nav>
              </div>
          </div>
    <img src={Cbr} className="App-cbr"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <img src={Github} className="App-github"/>
      </header>
    </div>
  );
}

export default App;