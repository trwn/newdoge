import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import PreMint from "./pages/PreMint/preMint";
import ViewNFT from "./pages/ViewNFT/viewNFT";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/preMint" element={<PreMint />} exact />
        <Route path="/ViewNFT" element={<ViewNFT />} exact />
      </Routes>
    </Router>
  );
}

export default App;
