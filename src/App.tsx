import React from 'react';
import './css/App.scss';
import Board from "./components/board";

const App: React.FC = () => {
  return (
    <div className="App">
       <Board />
    </div>
  );
}

export default App;
