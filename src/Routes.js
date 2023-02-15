import React from "react";
import { Routes, Route } from "react-router-dom";
import Car1 from "./Cars/Car1";
import Car2 from "./Cars/Car2";
import Car3 from "./Cars/Car3";
import Car4 from "./Cars/Car4";
import Car5 from "./Cars/Car5";
const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/orange" element={<Car1 />} />
        <Route path="/yellow" element={<Car2 />} />
        <Route path="/green" element={<Car3 />} />
        <Route path="/black" element={<Car4 />} />
        <Route path="/red" element={<Car5 />} />
      </Routes>
    </div>
  );
};

export default Routess;
