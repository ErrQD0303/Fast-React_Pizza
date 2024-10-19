import { getOrder } from "../../services/apiRestaurant";
import { IOrder } from "../../types/order";
import { Params } from "react-router-dom";

export async function loader({ params }: { params: Params }): Promise<IOrder> {
  const orderId = params.orderId;

  if (typeof orderId !== "string") {
    throw new Error("Order ID is required and must be a string");
  }

  const order = (await getOrder(orderId)) as IOrder;
  return order;
}
