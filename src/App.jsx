import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Cart from "./page/Cart";
import Home from "./page/Home";

function App() {
  return (
    <div className="font-bodyFont bg-gray-100">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
