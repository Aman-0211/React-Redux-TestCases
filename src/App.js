import React from 'react';
import './App.css';
import Header from '../src/component/header';
import HeadLine from './component/headline';

const TempArray = [
  {
    fName: 'Aman',
    lName: 'Thakur',
    email: 'amanthakur@gmail.com',
    age: 23,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine
          header="Post"
          desc="Click the button to render post"
          tempArray={TempArray}
        />
      </section>
    </div>
  );
}

export default App;
