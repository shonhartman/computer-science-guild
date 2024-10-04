import React from 'react';
import BirthdayProblem from './components/BirthdayProblem';
// import AsymptoticNotation from './components/AsymptoticNotation';
// import ProvingCorrectness from './components/ProvingCorrectness';
// import ComputationalProblem from './components/ComputationalProblem';
// import JenAndBerry from './components/JenAndBerry';
import OracleProblem from './components/OracleProblem';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Algorithms and Computation</h1>
      <BirthdayProblem />
      {/* <ComputationalProblem /> */}
      {/* <JenAndBerry /> */}
      {/* <OracleProblem /> */}
      {/* <ProvingCorrectness /> */}
      {/* <AsymptoticNotation /> */}
    </div>
  );
}

export default App;
