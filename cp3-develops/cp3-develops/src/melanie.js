import Mel from "./MelanieMarieJames.jpg";
import Button1 from "./components/Button";
import Button2 from "./components/Button2";


const Melanie = () => {
    return (
        <div>
            <p>
                <img src={Mel} className="App-mel" alt="mel" />
            </p>
            <Button1/>
        </div>

    )
}

export  default Melanie