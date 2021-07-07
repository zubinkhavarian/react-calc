import React, { Component } from 'react';
import './App.css';

import Calculator from './Calculator';

// https://www.youtube.com/watch?v=ZtU7Mhf9vN8
// https://codepen.io/mjijackson/pen/xOzyGX

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
