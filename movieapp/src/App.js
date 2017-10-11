import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './components/MoviesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<MoviesList/>
      </div>
    );
  }
}

export default App;
