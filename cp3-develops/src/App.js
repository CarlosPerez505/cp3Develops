import './App.css';
import Cbr from './cbr.jpeg';
import Github from './github.png';
import Linkdin from './linkdin-icon-logo.png'

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <img src={Cbr} className="App-cbr"/>
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
                <img src={Github} className="-github"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <img src={Linkdin} className="App-link"/>
                <img src={Github} className="-github"/>
            </header>
        </div>
    );
}

export default App;