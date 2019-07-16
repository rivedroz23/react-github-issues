import React from 'react';
import './App.css';
import Home from './Home';
import Issue from './Issue';
import axios from 'axios';
import IssueShow from './IssueShow';
import ReactMarkdown from 'react-markdown'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {
    issues: []
  }



  componentDidMount() {
    console.log("blah"); 
    //e.preventDefault()
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
      .then(result => {
        console.log(result)
        let issues = result.data;
      this.setState({ 
        issues 
      }); 
        // .catch(error => {
          // console.log(error)
        })
    
  }


  render(){
    return (
      <Router>
        <nav>
          <Link to = '/'>Home</Link>
        </nav>
        <Route exact path = '/' component = { Home } />
        <Route exact path = '/issues' 
        render={props => <Issue issues={this.state.issues} {...props}/>} />
        <Route path = '/issues/:id'
        render={props => <IssueShow issues={this.state.issues} {...props}/>} />


      </Router>

      
    );
  }
}
  
 

export default App;
