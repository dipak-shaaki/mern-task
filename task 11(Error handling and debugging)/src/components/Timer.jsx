import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c + 1);
//     }, 1000);
//   }, []);  //buggy code memory leak
// return <h2>Timer: {count}</h2>;

useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(id); // cleanup
}, []);

}


//Interval never cleared, keeps running even after unmount
