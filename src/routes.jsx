import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./screen/auth/login";
import Register from "./screen/auth/register";
import Home from "./screen/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/login" element={<Login />} />
        <Route exact="true" path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}