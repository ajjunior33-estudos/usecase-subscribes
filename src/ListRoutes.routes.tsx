import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Example02 } from "./pages/Example02";
import { Example03 } from "./pages/Example03";
import { Example04 } from "./pages/Example04";
import { Example05 } from "./pages/Example05";

const ListRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example02" element={<Example02 />} />
      <Route path="/example03" element={<Example03 />} />
      <Route path="/example04" element={<Example04 />} />
      <Route path="/example05" element={<Example05 />} />
    </Routes>
  );
};

export { ListRoutes };
