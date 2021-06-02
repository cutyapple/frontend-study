import React from "react";

import { BrowserRouter } from "react-router-dom";
import D from "./feature/d/D";

import DropDownContainer from "./feature/dropDown/DropDownContainer";

const App = () => {
  return (
    <BrowserRouter>
      <DropDownContainer />
      <D />
    </BrowserRouter>
  );
};

export default App;
