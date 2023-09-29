import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  const noOfIceCream = useSelector((state) => state.iceCream.noOfIceCreams);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>No Of IceCream: - {noOfIceCream}</h2>
      <button onClick={() => dispatch(Ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock IceCream</button>
    </div>
  );
};
export default IceCreamView;
