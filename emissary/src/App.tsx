import React from 'react';
import { Jobs } from './features/job/Job';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="application-header">
          Job applications
        </div>
        <div>
          <Jobs />
        </div>
      </div>


    </div>
  );
}

export default App;
