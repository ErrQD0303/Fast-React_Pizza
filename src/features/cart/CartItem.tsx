import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../../store/cartSlice";
import { ICartItem } from "../../types/cart";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";

type Props = {
  item: ICartItem;
};

function CartItem({ item }: Props) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateCartItemQuantity
          id={pizzaId}
          currentQuantity={currentQuantity!}
        />
        <DeleteCartItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
