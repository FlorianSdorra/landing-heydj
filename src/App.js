import React from 'react';
import './App.scss';

import LandingPage from './components/LandingPage'
import ListWrap from './components/ListWrap';

function App() {
  return (
    <div className="App">
        <LandingPage></LandingPage>
        <ListWrap></ListWrap>
      </div>
  );
}

export default App;
