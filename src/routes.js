import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
// import { PrivateRoute } from "./auth/PrivateRoute";
// import { Callback } from "./auth/Callback";
// import { Logout } from "./auth/Logout";

// const Customers = lazy(() => import("./pages/Customers"));
// const Vehicles = lazy(() => import("./pages/Vehicles"));
// const Reservations = lazy(() => import("./pages/Reservations"));
// const AddReservation = lazy(() => import("./pages/AddReservation"));
// const Agreements = lazy(() => import("./pages/Agreements"));
// const Admin = lazy(() => import("./pages/Admin"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const Reports = lazy(() => import("./pages/Reports"));
// const Todos = lazy(() => import("./pages/ToDos"));
// const DailyPlanner = lazy(() => import("./pages/DailyPlanner"));
// const Inquiry = lazy(() => import("./pages/InquiryPage"));

const Router = () => (
  <Switch>
    {/* <Route exact={true} path="/signin-oidc" component={Callback} />
    <Route exact={true} path="/logout" component={Logout} /> */}
    {/* <PrivateRoute path="/customers" component={Customers} /> */}
    {/* <PrivateRoute path="/vehicles" component={Vehicles} />
    <PrivateRoute exact path="/reservations" component={Reservations} />
    <PrivateRoute
      path="/reservations/add-reservation"
      component={AddReservation}
    />
    <PrivateRoute path="/agreements" component={Agreements} />
    <PrivateRoute path="/admin" component={Admin} />
    <PrivateRoute path="/reports" component={Reports} />
    <PrivateRoute path="/home" component={Dashboard} />
    <PrivateRoute path="/todos" component={Todos} />
    <PrivateRoute path="/dailyplanner" component={DailyPlanner} />
    <PrivateRoute path="/Inquiry" component={Inquiry} /> */}
    {/* <PrivateRoute path="/" component={Dashboard} /> */}
  </Switch>
);

export default Router;
