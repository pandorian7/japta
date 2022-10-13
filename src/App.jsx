import { Route, Routes } from "react-router-dom";

import Menu from "./menu";
import Hiragana from "./hiragana";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/hiragana" element={<Hiragana />} />
    </Routes>
  );
}
