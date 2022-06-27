import GraphPng from '../graph.png'



const Graph =() => {
    return (
        <div >
            <img src={GraphPng} alt="graph"/>
            <br/>
            <p>
                This is the Justice Department's unsettling graph of untold stories.<br/>
                A graph that doesn't get the attention it deserves and lacking data from state,
                county, and tribal governments. Due to these facts the reality of the trend is
                higher than what you see here. Those that know about this data have started a
                movement
                called <a href={"https://www.youtube.com/watch?v=ib0GDAPeymo"}>#MMIW</a> #MMIW
                which stands for Missing Murdered Indigenous Women.
            </p>
        </div>




    )
}

export default Graph