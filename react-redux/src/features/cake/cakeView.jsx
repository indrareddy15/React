import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const [value, setvalue] = useState();
  const noOfCake = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No Of Cakes - {noOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setvalue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  );
};
export default CakeView;
