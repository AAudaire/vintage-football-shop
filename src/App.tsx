import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./layouts/rootLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}
