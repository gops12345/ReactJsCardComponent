import React from 'react';

import './App.css';
import Card from './NormalCard/CardComponent/CardComponent';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee, faEllipsisH)



function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
