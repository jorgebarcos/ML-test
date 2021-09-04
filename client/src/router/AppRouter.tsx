import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/items" component={SearchPage} exact />
          <Route path="/items/:id" component={DetailPage} exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
