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

export default function Routes(props) {
  const {initialData} = props;
  const {peopleData, planetsData, starshipsData} = initialData;

  return (
    <Switch>
      <Route path="/people">
        <PeoplePage initialData={peopleData}/>
      </Route>
      <Route path="/planets">
        <PlanetsPage initialData={planetsData}/>
      </Route>
      <Route path="/starships">
        <StarshipsPage initialData={starshipsData}/>
      </Route>
      <Route path='/not-found'>
        <NotFound/>
      </Route>
      <Redirect from='/' exact={true} to='/people'/>
      <Redirect from='*' to='/not-found'/>
    </Switch>
  );
}
