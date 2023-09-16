import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Example02 } from "./pages/Example02";
import { Example03 } from "./pages/Example03";

const ListRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example02" element={<Example02 />} />
      <Route path="/example03" element={<Example03 />} />
    </Routes>
  );
};

export { ListRoutes };
