import {combineReducers} from 'redux';
import loading from './loading';
import people
  from '../../components/pages/people-page/components/store/reducers/people';
import planets
  from '../../components/pages/planets-page/components/store/reducers/planets';
import starships
  from '../../components/pages/starships-page/components/store/reducers/starships';

export default combineReducers({
  people,
  planets,
  starships,
  loading
});
