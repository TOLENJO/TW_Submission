import React from "react";
import { increaseValue, decreaseValue } from "../redux/action-creator";
import { useSelector, useDispatch } from "react-redux";

function Index() {
  const myState = useSelector((state) => state.ourState.count); //
  const dispatch = useDispatch();
  console.log("++++ my state", myState);
  return (
    <div id="index">
      <button onClick={() => dispatch(increaseValue())}>Increment</button>
      <p>{myState}</p>
      <button onClick={() => dispatch(decreaseValue())}>Decrement</button>
    </div>
  );
}

export default Index;