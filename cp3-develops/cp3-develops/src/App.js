import Redpalm from "./bloodyHandPrint.svg"
import './App.css';
import Home from "./home";
import NavBar from "./navBar";
import Footer from "./footer";

function App() {
  return (

    <div className="App">
        <NavBar/>
        <img src={Redpalm} className="App-logo" alt="logo" />
        <Home/>
        <Footer style={{backgroundColor: "black" }}/>
    </div>
  );
}

export default App;
