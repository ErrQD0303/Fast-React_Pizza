import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import Cart from "./features/cart/Cart.tsx";
import Menu from "./features/menu/Menu.tsx";
import { loader as menuLoader } from "./features/menu/menuLoader.tsx";
import { loader as orderLoader } from "./features/order/orderLoader.tsx";
import { action as createOrderAction } from "./features/order/createOrderAction.tsx";
import CreateOrder from "./features/order/CreateOrder.tsx";
import Order from "./features/order/Order.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
