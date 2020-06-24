import {
  SET_PLANETS,
  DELETE_PLANET,
  CHANGE_PLANET_BELOVED_STATUS,
  ADD_PLANET,
  UPDATE_PLANET,
  EDIT_PLANET_DATA,
  SET_FORM_ERRORS
} from '../actions/planets';
import {initialData} from '../../../PlanetsPage';


const initialState = {
  allPlanets: [],
  planet: initialData,
  formErrors: {},
}

function planets(state = initialState, action) {
  switch(action.type) {
    case SET_PLANETS:
      return {...state,
        allPlanets: action.planets
      };
    case ADD_PLANET:
      state.allPlanets.push(action.planet)
      return {...state}
    case UPDATE_PLANET:
      return {...state,
        allPlanets: state.allPlanets.map(starship =>
          (starship.id === action.planet.id) ? action.planet : starship)
      };
    case DELETE_PLANET:
      return {...state,
        allPlanets: state.allPlanets.filter(planet => planet !== action.planet)
      };
    case CHANGE_PLANET_BELOVED_STATUS:
      return {...state,
        allPlanets: state.allPlanets.map((planet) => {
          return planet.id === action.id ? {...planet, beloved: !planet.beloved} : planet
      })
      };
    case EDIT_PLANET_DATA:
      return {...state,
        planet: {...action.planet}
      };
    case SET_FORM_ERRORS:
      return {...state,
        formErrors: {...action.formErrors}
      };
    default:
      return state;
  }
}

export default planets;
