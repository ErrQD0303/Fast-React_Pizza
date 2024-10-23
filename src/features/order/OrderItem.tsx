import { ICartItem } from "../../types/cart";
import { formatCurrency } from "../../utils/helpers";

type Props = {
  item: ICartItem;
  isLoadingIngredients: boolean;
  ingredients: string[];
  currentDot: number;
};

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
  currentDot,
}: Props) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients
          ? `Loading${".".repeat(currentDot)}`
          : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
