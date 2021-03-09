import React from 'react';
import './app.css';

function App() {
  const name = "Jihui"
  return (
    <>
    
    <h1>Hello :)</h1>
    { name && <h1>Hello {name} :)</h1> }
    </>
  );
}

export default App;
