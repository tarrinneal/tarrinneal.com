import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div id='website'>
      <div>This is Tarrin's Website! Hire him!</div>
    </div>
  );
};

export default App;
