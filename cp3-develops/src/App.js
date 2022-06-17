import './App.css';
import Cbr from './cbr.jpeg';
import Redpalm from './r

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Cbr} className="App-cbr" alt="cbr" />
          <div>
              <p>
                  hey hey
              </p>
          </div>
              <p>
                  Happy Birthday
              </p>
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
