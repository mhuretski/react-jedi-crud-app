import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from 'react';
import PeoplePage from '../pages/people-page/PeoplePage';
import StarshipsPage from '../pages/starships-page/StarshipsPage';
import PlanetsPage from '../pages/planets-page/PlanetsPage';
import NotFound from './NotFound';
import PeopleForm from '../pages/people-page/components/PeopleForm';
import PlanetsForm from '../pages/planets-page/components/PlanetsForm';
import StarshipsForm from '../pages/starships-page/components/StarshipsForm';

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/people" component={PeoplePage}/>
      <Route path="/people/:id" component={PeopleForm}/>

      <Route exact path="/planets" component={PlanetsPage}/>
      <Route path="/planets/:id" component={PlanetsForm}/>

      <Route exact path="/starships" component={StarshipsPage}/>
      <Route path="/starships/:id" component={StarshipsForm}/>

      <Route path='/not-found' component={NotFound}/>

      <Redirect from='/' exact={true} to='/people'/>
      <Redirect from='*' to='/not-found'/>
    </Switch>
  );
}
