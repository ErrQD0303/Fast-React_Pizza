import { Form, useActionData, useNavigation } from "react-router-dom";
import { CreateOrderFormError } from "../../types/order";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { fetchAddress, getUser } from "../../store/userSlice";
import { getCart, getTotalCartPrice } from "../../store/cartSlice";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector(getUser);
  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";
  const dispatch = useDispatch<AppDispatch>();

  const formErrors = useActionData() as CreateOrderFormError;

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? 0.2 * totalCartPrice : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  function handleGetPosition(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            className={`sm:basis-40 ${formErrors?.phone && "sm:mt-1.5 sm:self-start"}`}
          >
            Phone number
          </label>
          <div className={`flex-1`}>
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            className={`sm:basis-40 ${addressStatus === "error" && "sm:mt-1.5 sm:self-start"}`}
          >
            Address
          </label>
          <div className={`${!isLoading && "relative"} grow`}>
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
            {!position.latitude && !position.longitude && (
              <span className="absolute right-0 top-[1px] z-50 md:top-[-1px]">
                <Button
                  type="small"
                  onClick={handleGetPosition}
                  disabled={isLoadingAddress}
                >
                  Get Position
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 ring-offset-2 focus:outline-none focus:ring focus:ring-yellow-400"
            value={withPriority + ""}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={`${position.latitude},${position.longitude}`}
          />
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
