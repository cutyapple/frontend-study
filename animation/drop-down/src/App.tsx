import React from "react";

import { BrowserRouter } from "react-router-dom";

import DropDownContainer from "./feature/dropDown/DropDownContainer";

const App = () => {
  return (
    <BrowserRouter>
      <DropDownContainer />
    </BrowserRouter>
  );
};

export default App;
