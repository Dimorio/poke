import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import PokeDetail from "./Components/PokemonDetail/PokeDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeDetail />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/pokemon/:name" element={<PokeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
