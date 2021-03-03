import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  let nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();

  }

  return (
    <div className="App">
      <h1>Checkout</h1>
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" ref={nameInputRef}/>
      <button type="submit"></button>
    </form>
    </div>
  );
}

export default App;
