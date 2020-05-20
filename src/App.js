import React from 'react';
import './App.css';
import Header from '../src/component/header';
import HeadLine from './component/headline';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine />
      </section>
    </div>
  );
}

export default App;
