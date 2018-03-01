import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/HomePage'
import Lists from './components/pages/Lists'
import Single from './components/pages/Single'
import qa from './components/pages/Qa'
import Reference from './components/pages/Reference'
import About from './components/pages/About'

//style
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
      
          <Route exact path="/" component={Homepage} />
          <Route exact path="/lists" component={Lists} />
          <Route exact path="/single" component={Single} />
          <Route exact path="/qa" component={qa} />
          <Route exact path="/reference" component={Reference} />
          <Route exact path="/about" component={About} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
