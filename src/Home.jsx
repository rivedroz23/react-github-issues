import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
   
    return (
        <div class="Home">
            <div>
               <h2> 👋Want to submit an issue to bookface/actre?</h2> 
               <p> If you have a bug or an idea, read the contributing guidlines before opening an issue. </p>
                   <p>Issues labeled good first issue can be good first contributions.</p>
              
            </div>
            <Link to="/issues"><button>Go to Issues</button></Link>
        </div>
    );
};


export default Home;