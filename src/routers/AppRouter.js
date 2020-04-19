import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm";
import AddGuest from "../components/AddGuest";
import RestaurantDashboard from "../components/Dashboard";
import EditGuestPage from "../components/EditGuestPage";
import PickYourRestaurant from "../components/PickYourRestaurant";

const AppRouter = () => (
  <BrowserRouter>
    <HashRouter basename="/">
      <div>
        <Header
          title="Random Restaurant"
          subtitle="Where will your next meal be?"
        />
        <Switch>
          <Route path="/" component={ProfileForm} exact={true} />
          <Route path="/guests" component={AddGuest} />
          <Route path="/edit/:id" component={EditGuestPage} />
          <Route path="/pickrestaurant" component={PickYourRestaurant} />
          <Route
            path="/dashboard"
            component={RestaurantDashboard}
            exact={true}
          />
        </Switch>
      </div>
    </HashRouter>
  </BrowserRouter>
);

export default AppRouter;
