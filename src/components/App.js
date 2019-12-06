import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Dashboard from "./Dashboard";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Footer = styled.section`
  padding: 3px 2px;
  margin-top: auto;
`;

export default function App() {
  return (
    <Root>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      <Footer>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          @amytangcodes
        </Typography>
      </Footer>
    </Root>
  );
}
