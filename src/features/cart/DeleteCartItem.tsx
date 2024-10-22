import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/cartSlice";
import { AppDispatch } from "../../store/store";

type Props = {
  id: number;
};

const DeleteCartItem = ({ id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteCartItem;
