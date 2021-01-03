import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ClashForm from "./ClashForm";
import ClashPage from "./ClashPage";
import Homepage from "./Homepage";

/** Routes for application. */
function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/clash_form" exact>
        <ClashForm />
      </Route>
      <Route path="/clash_page" exact>
        <ClashPage />
      </Route>
      <Route path="/api" exact>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
export default Routes;