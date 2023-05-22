import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0);
  function increaseNum() {
    setCount(count + 1);
  }
  
  function decreaseNum() {
    if(count === 0) return
    setCount(count - 1);
  }

  return <div>
    <p>Count: {count}</p>
    <button onClick={increaseNum}>Increment</button>
    <button onClick={decreaseNum}>Decrement</button>
  </div>
}

export default Counter