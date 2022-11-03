import React from "react";
import { Route, Routes } from "react-router-dom";
import Find from "./pages/Find";
import Home from "./pages/Home";
import Map from "./pages/Map";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rechercher" element={<Find />} />
      <Route path="/carte" element={<Map />} />
    </Routes>
  );
}
