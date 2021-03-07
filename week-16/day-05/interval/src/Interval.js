import { useEffect, useState } from "react";

const Interval = () => {
  
  let [counter, setCounter] = useState(0);
  let [increment, setIncrement] = useState(1000)

  const clickHandler = () => {
      setIncrement(500)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter++)
        }, increment);
        return () => clearInterval(interval);
      }, [increment]);


    return ( 
        <div>
            <h2>Interval counter</h2>
            <button onClick={clickHandler}>Click me</button>
            <div className="counter">{counter}</div>
        </div>
     );
}
 
export default Interval;