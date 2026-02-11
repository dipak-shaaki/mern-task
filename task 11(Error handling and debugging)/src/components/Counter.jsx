import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

// //   setCount(count + 1); // Infinite render loop

//   return <h2>Counter: {count}</h2>;
// }


export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
