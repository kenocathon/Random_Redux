import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import AddGuestForm from "../components/AddGuestForm";
import AddRestaurant from "../components/AddRestaurantDashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header title="Random Restaurant" />
      <Switch>
        <Route path="/" component={ProfileForm} exact={true} />
        <Route path="/guests" component={AddGuestForm} />
        <Route path="/dashboard" component={AddRestaurant} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
