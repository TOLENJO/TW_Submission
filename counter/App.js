import React from "react";
import { useEffect, useState } from "react";
import Index from "./component";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      {" "}
      Value: {counter} <button onClick={increment}>Increment</button>{" "}
    </div>
  );
}

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === "counter/incremented") {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1,
    };
  }
  // otherwise return the existing state unchanged
  return state;
}

function App() {
  return (
    // <Counter />
    <Index />
  );
}

export default App;
