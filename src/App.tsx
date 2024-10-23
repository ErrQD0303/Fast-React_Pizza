import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import Cart from "./features/cart/Cart.tsx";
import Menu from "./features/menu/Menu.tsx";
import { loader as menuLoader } from "./features/menu/menuLoader.tsx";
import { loader as orderLoader } from "./features/order/orderLoader.tsx";
import { loader as appLoader } from "./features/appLoader.tsx";
import { action as createOrderAction } from "./features/order/createOrderAction.tsx";
import { action as updateOrderAction } from "./features/order/updateOrderAction.tsx";
import CreateOrder from "./features/order/CreateOrder.tsx";
import Order from "./features/order/Order.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import "./styles/index.scss";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: appLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        ),
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order/new",
        element: (
          <ProtectedRoute>
            <CreateOrder />
          </ProtectedRoute>
        ),
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
