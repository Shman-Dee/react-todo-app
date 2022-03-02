//useState is a build in function on react
import { useState } from "react";

export const Counter = () => {
  //convention is to add 'set' infront on the the first value in the array
  const [count, setCount] = useState(0);

  // a component must return html at the end
  return (
    <div className="we use className instead of class in react">
      <p
        //if using style and css property has a dash, it is now camelCase
        style={{
          color: count % 2 === 0 ? "blue" : "red",
          fontSize: "100px",
        }}
      >
        Count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
