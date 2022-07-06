import Redpalm from "./bloodyHandPrint.svg"
import './App.css';
import Home from "./home";
import NavBar from "./navBar";
import Footer from "./footer";
import Graph from "./components/graph"
import Eagle from "./components/eagle";
import EagleAvatar from "./components/eagle";
import Gabby from "./gabby";
import Button1 from "./components/Button";
import Melanie from "../src/melanie";
import Button2 from "./components/Button2";

function App() {
  return (

    <div className="App">

        <>
            <NavBar/>
            <Graph/>
            <Gabby/>
            <img src={Redpalm} className="App-logo" alt="logo" />
            <Home/>
            <EagleAvatar/>
            <Melanie/>
            <Footer/>
        </>

    </div>
  );
}

export default App;
