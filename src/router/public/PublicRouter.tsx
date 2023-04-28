import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login/Login";

const PublicRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default PublicRouter;
