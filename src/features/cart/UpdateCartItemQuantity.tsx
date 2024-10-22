import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../store/cartSlice";
import { AppDispatch } from "../../store/store";

type Props = {
  id: number;
  currentQuantity: number;
};

const UpdateCartItemQuantity = ({ id, currentQuantity }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(id));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
};

export default UpdateCartItemQuantity;
