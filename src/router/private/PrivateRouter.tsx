import { Home } from "@mui/icons-material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const PrivateRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default PrivateRouter;
