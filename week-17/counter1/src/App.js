import './App.css';
import {useEffect, useState} from 'react';

function App() {
  let [counter, setCounter] = useState(Number(localStorage.getItem('counterInLocalStorage'))) || 0;
  let [session] = useState(Number(localStorage.getItem('sessionInLocalStorage'))+1) || 0;

  const handleClick = (modifier) => {
    if (modifier < 0 && counter === 0) {
      return null;
    } else {
      setCounter(counter+modifier)
    }
  }


  window.onkeydown = (event) => {
    if(event.key === 'ArrowUp') {
      setCounter(counter+1);
    } else if (event.key === 'ArrowDown') {
      if (counter === 0) {
        return null;
      } else {
        setCounter(counter-1);
      }
    }
  }
  
  useEffect(() => {
    localStorage.setItem('counterInLocalStorage', counter);
    localStorage.setItem('sessionInLocalStorage', session);
  }, [counter, session])


  return (
    <div className="App">
      <div className="counter">Számláló (mindenkori): {counter}</div>
      <div className="counter">Számláló (munkamenet): {session}</div>
      <button onClick={() => {handleClick(+1)}}>Növel</button>
      <button onClick={() => {handleClick(-1)}}>Csökkent</button>
    </div>
  );
}


export default App;
