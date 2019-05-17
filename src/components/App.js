import React from 'react';
import './App.css';
import SongList from './SongList';

const App = () => {
  return (
    <div className="ui contianer grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;