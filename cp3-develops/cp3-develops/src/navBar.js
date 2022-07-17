import Redpalm from "./bloodyHandPrint.svg";


const NavBar = () => {
    return (
        <header className="App-nav">

            <h1 className="App-header">
                <img src={Redpalm} alt="logo" className="Nav-logo"/>
                Menu
            </h1>
            <nav className="Nav-row">

                <button className="Nav-btn"><a href="/#" className="App-li-a"><h2><b>Welcome</b></h2></a></button>
                <button className="Nav-btn"><a href="/#" className="App-li-a">Home</a></button>
                <button className="Nav-btn"><a href="/#" className="App-li-a">Home</a></button>
                <button className="Nav-btn"><a href="/#" className="App-li-a">Home</a></button>
                <button className="Nav-btn"><a href="/#" className="App-li-a">Footer</a></button>

            </nav>
        </header>

    )

}

export default NavBar