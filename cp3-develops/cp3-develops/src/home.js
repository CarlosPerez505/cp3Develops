import Redpalm from "./bloodyHandPrint.svg";
import Southwest from "./southWest.jpeg";

const Home = () => {
    return (

    <home className="App-home">
       <h1>
           Welcome To red palm
       </h1>
        <p className="App-welcome">
            A community where family, friends, and curious web sleuths can come together to share <br/>
            their stories. Most importantly its a place where new clues can be shared, theories can <br/>
            be examined, and families can update the users of the app to collectively examine new data. <br/>

            The goal of this app is to combine data  from the Justice's Department NAMUS missing <br/>
            person data base and the New Mexico Department of  Public Safety data base into one <br/>
            easy to use resource. Our hope is that the information  passed here keeps the stories<br/>
            of our lost girls and women in the spot light and hopefully solve these mysteries. <br/>

            If you wanna help please sign in and choose a profile avatar and take a look at our case <br/>
            of the week. After reviewing the case ONLY post a question, observation, or theory if you <br/>
            so choose and remember that this is real life so be respectful. All data shown is publicly <br/>
            accessible information, for instance you can do what is known as a FOIA request <br/>
            (Freedom of Information Act) for police reports on cases that have gone cold at your local <br/>
            police station. That police report contains a wealth of data that can be used to a web <br/>
            sleuth's (you) advantage. So tear that data apart, examine it, and you just might find <br/>
            something someone missed. Good luck and thank you for your interest. <br/>
        </p>
        <img src={Southwest} alt="Southwest"  className="Southwest"/>
    </home>

    )

}

export default Home