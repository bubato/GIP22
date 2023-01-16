import React from "react";
import { Routes, Route } from "react-router-dom";

import { Doc, User, Position, Home } from "./pages";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/*" element={<User />} />
          <Route exact path="/docs/*" element={<Doc />} />
          <Route exact path="/positions/*" element={<Position />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
