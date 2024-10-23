import { ActionFunctionArgs } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import { IOrderParams } from "../../types/order";

export async function action({ params }: ActionFunctionArgs) {
  const data = { priority: true };
  const orderParams = params as unknown as IOrderParams;
  await updateOrder(orderParams.orderId, data);
  return null;
}
