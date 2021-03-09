import React from 'react';
import './app.css';
import Habit from './components/habit';

function App() {
  //const name = "Jihui"
  // return (
  //   <>
  //     <h1>Hello :)</h1>
  //     { name && <h1>Hello {name} :)</h1> /* 자바스크립트 코드 */ } 
  //     {
  //       ['💖', '💕'].map(item => (
  //         <h1>{item}</h1>
  //       ))
  //     }
  //   </>
  // );

  return <Habit />;
}

export default App;
