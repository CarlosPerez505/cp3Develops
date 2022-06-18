
import './App.css';
import Sunset from './sunset.jpg'
import Github from './github.png';
import Linkdin from './linkdin-icon-logo.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Sunset} className="App-link" alt=""/>
                <img src={Linkdin} className="App-link" alt=""/>

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
                <img src={Github} className="App-link" alt=""/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <body>
            <p>
                hello
            </p>
            </body>
        </div>
    );
}

export default App;
