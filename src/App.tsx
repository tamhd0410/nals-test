import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
