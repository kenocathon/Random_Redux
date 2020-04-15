import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import AddGuest from "../components/AddGuestPage";
import RestaurantDashboard from "../components/Dashboard";
import AddRestaurant from "../components/AddRestaurantPage";
import EditGuestPage from "../components/EditGuestPage";

const AppRouter = () => (
  <BrowserRouter>
    <HashRouter basename="/">
      <div>
        <Header title="Random Restaurant" />
        <Switch>
          <Route path="/" component={ProfileForm} exact={true} />
          <Route path="/guests" component={AddGuest} />
          <Route path="/edit/:id" component={EditGuestPage} />
          <Route path="/pickrestaurant" component={AddRestaurant} />
          <Route path="/dashboard" component={RestaurantDashboard} />
        </Switch>
      </div>
    </HashRouter>
  </BrowserRouter>
);

export default AppRouter;
