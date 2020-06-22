import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from 'react';
import PeoplePage from '../pages/PeoplePage';
import StarshipsPage from '../pages/StarshipsPage';
import PlanetsPage from '../pages/PlanetsPage';
import NotFound from './NotFound';

export default function Routes() {

  return (
    <Switch>
      <Route path="/people">
        <PeoplePage/>
      </Route>
      <Route path="/planets">
        <PlanetsPage/>
      </Route>
      <Route path="/starships">
        <StarshipsPage/>
      </Route>
      <Route path='/not-found'>
        <NotFound/>
      </Route>
      <Redirect from='/' exact={true} to='/people'/>
      <Redirect from='*' to='/not-found'/>
    </Switch>
  );
}
