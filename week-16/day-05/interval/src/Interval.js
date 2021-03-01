import { useState } from "react";

const Interval = () => {
    const [counter, setCounter] = useState(0);


    return ( 
        <div>
            <h2>Interval counter</h2>
            <div className="counter">{counter}</div>
        </div>
     );
}
 
export default Interval;