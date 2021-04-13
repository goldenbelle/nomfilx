import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import TV from "../Routes/TV/index.js";
import Search from "../Routes/Search/index.js";
import Detail from "../Routes/Detail";
import MainPage from "../Routes/MainPage/index.js"

export default () => (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/movie" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );