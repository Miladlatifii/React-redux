import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const HooksIceCreamContainer = (props) => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes-{numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
