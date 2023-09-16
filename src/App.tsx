import { BrowserRouter } from "react-router-dom";
import { ListRoutes } from "./ListRoutes.routes";

const App = () => {
  return (
    <BrowserRouter>
      <ListRoutes />
    </BrowserRouter>
  );
};

export { App };
