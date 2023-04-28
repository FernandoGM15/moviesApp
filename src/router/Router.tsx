import PrivateRouter from "./private/PrivateRouter";
import PublicRouter from "./public/PublicRouter";

const Router = () => {
  const auth = true;
  if (!auth) return <PrivateRouter />;
  return <PublicRouter />;
};
export default Router;
