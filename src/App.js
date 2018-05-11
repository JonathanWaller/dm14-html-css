import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <main>
        <h2>Owl</h2>
        <div className="Owly"></div>
        <h1>Discover.Learn.Elevate.</h1>
        <p>Introducing the best practices, stories, and insights from the world's top design leaders. Loaded with in-depth books, podcasts, and more, DesignBetter.Co is your esential guide to building remarkable products and teams.</p>
        <div className = "explore">START EXPLORING</div>
      </main>
      <Footer />

      </div> 
    );
  }
}

export default App;
