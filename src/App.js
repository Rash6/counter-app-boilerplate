import { useState } from "react";
import "./App.css";

function App() {
  const[counter,setCounter]=useState(0)
  const handleClickdec=()=>{
    if(counter===0){
      return
    }
    setCounter(counter-1)
  }
  const handleClickinc=()=>{
    setCounter(counter+1)
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
      <button disabled={counter===0?true:false} onClick={handleClickdec} data-testid="counter-decrement-button">-</button>
      <button onClick={handleClickinc} data-testid="counter-increment-button">+</button>
    </div>
  );
}

export default App;
