import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Profiles from "./Profiles";
import Sidebar from "./Sidebar";
import Secrect from "./Secrect";


const Protected = ({ token }) => {
  // Các state và logic của component Protected

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar></Sidebar>

        <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
        <Route path="/products" element={<Products token={token} />} />
        <Route path="/profiles" element={<Profiles token={token} />} />
        <Route path="/secrect" element={<Secrect token={token} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Protected;