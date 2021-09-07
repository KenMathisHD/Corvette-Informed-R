import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./home/home";
import Year from "./home/generationPage/yearPage/[year]";
import Generation from "./home/generationPage/[generation]";
import Gallery from "./gallery/gallery";
import NewsAndForums from "./news-forums/newsAndForums";
import NotFound from "./notfound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/corvette/:generation/:year" component={Year}></Route>
      <Route path="/corvette/:generation" component={Generation}></Route>
      <Route path="/newsandforums" component={NewsAndForums}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/404-not-found" component={NotFound}></Route>
      <Redirect from="/" exact to="/home"></Redirect>
      <Redirect to="/404-not-found"></Redirect>
    </Switch>
  );
};

export default Routes;
