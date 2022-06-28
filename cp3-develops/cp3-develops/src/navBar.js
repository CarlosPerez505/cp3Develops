import ChatButton from "./chatButton";

const NavBar = () => {
    return (
       <nav className="App-nav">
           <a href="/" className="App-title">Redpalm</a>
           <>
               <row className="Nav-row">
                   <a href="/welcome" className="App-li-a">Welcome</a>

                   <a href="/home" className="App-li-a">Home</a>

                   <a href="/footer" className="App-li-a">Footer</a>
               </row>

           </>
       </nav>

    )

}

export default NavBar