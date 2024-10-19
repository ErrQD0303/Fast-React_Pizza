import { ActionFunctionArgs, redirect } from "react-router-dom";
import {
  IOrder,
  ICreateOrderFormData,
  ICreateOrderFormDataDto,
  CreateOrderFormError,
} from "../../types/order";
import { createOrder } from "../../services/apiRestaurant";
import { isValidPhone } from "../../utils/helpers";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as unknown as ICreateOrderFormData;

  const order: ICreateOrderFormDataDto = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors: CreateOrderFormError = {};

  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please give us your correct phone number. We need it to contact you.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder: IOrder = await createOrder(order);

  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}
