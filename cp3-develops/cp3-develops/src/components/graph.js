import GraphPng from '../graph.png'



const Graph =() => {
    return (
        <div >
            <img src={GraphPng} alt="graph" className="Graph"/>
            <p className="App-graph-p">
                This is the Justice Department's unsettling graph of untold stories.<br/>
                A graph that doesn't get the attention it deserves and lacking data from state,<br/>
                county, and tribal governments. Due to these facts the reality of the trend is<br/>
                higher than what you see here. Those that know about this data have started a<br/>
                movement called #MMIW which stands for Missing Murdered Indigenous Women.<br/>
                <a href={"https://www.youtube.com/watch?v=ib0GDAPeymo"} className="App-graph-a">#MMIW</a>
            </p>
        </div>




    )
}

export default Graph