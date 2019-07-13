import React from 'react';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {
    issues: []
  }

  render(){
    return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>{' '}
      </nav>
      <Route exact path='/' component={Home} />

    </Router>
      );
    }
  }

export default App;
