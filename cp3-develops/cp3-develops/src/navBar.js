import Redpalm from "./bloodyHandPrint.svg";


const NavBar = () => {
    return (
        <header className="App-nav">
            <img src={Redpalm} alt="logo" className="Nav-logo"/>
            <h1 className="App-header">
                Menu
            </h1>
            <nav className="Nav-row">
                <a href="/#" className="App-li-a">Welcome</a>

                <a href="/#" className="App-li-a">Home</a>

                <a href="/#" className="App-li-a">Footer</a>

            </nav>
        </header>

    )

}

export default NavBar