import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/a/:name" component={() => <div>a</div>} />
        <Route exact path="/b" component={() => <div>b</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
