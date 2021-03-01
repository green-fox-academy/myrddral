import './App.css';
import {useState} from 'react';

function App() {
  let [amount, setAmount] = useState(0);

  const handleClick = (modifier) => {
    if (modifier < 0 && amount === 0) {
      return null;
    } else {
      setAmount(amount+modifier)
    }
  }

  window.onkeydown = (event) => {
    if(event.key === 'ArrowUp') {
      setAmount(amount+1);
    } else if (event.key === 'ArrowDown') {
      if (amount === 0) {
        return null;
      } else {
        setAmount(amount-1);
      }
    }
  }

  return (
    <div className="App">
      <button onClick={() => {handleClick(+1)}}>Vegyél egyet</button>
      <div className="counter">{amount}</div>
      <button onClick={() => {handleClick(-1)}}>Egyél egyet</button>
    </div>
  );
}


export default App;
