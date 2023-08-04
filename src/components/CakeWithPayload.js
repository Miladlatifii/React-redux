import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";

const CakeWithPayload = (props) => {
  const [numbers, setNumbers] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes-{numOfCakes}</h2>
      <input type="text" onChange={(e) => setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>buy {numbers} cake</button>
    </div>
  );
};

export default CakeWithPayload;
