import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import Landingpage from '../landingpage/Landingpage';
import SignUp from '../sign_up/Signup';

const Layout = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={ROUTES.LANDING}>
            <Landingpage />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignUp />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default Layout;
