import Mel from "./MelanieMarieJames.jpg";
import Button1 from "./components/Button";
import Button2 from "./components/Button2";


const Melanie = () => {
    return (
        <p>
            <img src={Mel} className="App-mel" alt="mel" />
                <>
                    <Button1/>
                    <Button2/>
                </>
        </p>
    )
}

export  default Melanie