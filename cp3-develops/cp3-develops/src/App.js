import Redpalm from "./bloodyHandPrint.svg"
import './App.css';
import Home from "./home";
import NavBar from "./navBar";
import Footer from "./footer";

import Eagle from "./components/eagle";
import EagleAvatar from "./components/eagle";

function App() {
  return (

    <div className="App">

        <>
            <NavBar/>
            <img src={Redpalm} className="App-logo" alt="logo" />
            <Home/>
            <EagleAvatar/>
            <Footer/>
        </>

    </div>
  );
}

export default App;
