import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'


function App() {
  return (
    // bem class naming convention
    <div className="app">
      {/* Header */}
      <Header />
      {/* tinerCard */}
      <TinderCards />
      {/* SwipeCards */}
      <SwipeButtons />

    </div>
  );
}

export default App;
