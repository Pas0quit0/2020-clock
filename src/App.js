import React from 'react';
import Clock from './components/ComputerClock'
import WorldClock from './components/WorldClock'


function App(props) {
  return (<div>
    <h1>Exemplo de acesso a API externa</h1>
    <Clock />
    <WorldClock />
    <WorldClock 
      local='Europe/London'
    />
  </div>);
}

export default App; 