import React from "react";

import Baselayout from "./layouts/baselayout";
import AppRoutes from "./routers";

import "./assets/css/style.css";

function App() {
  return (
    <Baselayout>
      <AppRoutes />
    </Baselayout>
  );
}

export default App;
