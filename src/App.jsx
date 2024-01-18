import { createBrowserRouter } from "react-router-dom";

import { Home } from "./page/Home";
import ErrorPage from "./error-page";
import { About } from "./page/about";
import { Product } from "./page/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
