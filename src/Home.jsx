import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
   
    return (
        <div>
            <h1>Github issues</h1>
            <Link to="/issues"><button>Go to Issues</button></Link>
        </div>
    );
};


export default Home;