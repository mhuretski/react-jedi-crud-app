import {
  SET_STARSHIPS,
  DELETE_STARSHIP,
  CHANGE_STARSHIP_BELOVED_STATUS,
  ADD_STARSHIP,
  UPDATE_STARSHIP,
  EDIT_STARSHIP_DATA,
  SET_FORM_ERRORS
} from '../actions/starships';
import {initialData} from '../../../StarshipsPage';


const initialState = {
  allStarships: [],
  starship: initialData,
  formErrors: {},
}

function starships(state = initialState, action) {
  switch(action.type) {
    case SET_STARSHIPS:
      return {...state,
        allStarships: action.starships
      };
    case ADD_STARSHIP:
      state.allStarships.push(action.starship)
      return {...state}
    case UPDATE_STARSHIP:
      return {...state,
        allStarships: state.allStarships.map(starship =>
          (starship.id === action.starship.id) ? action.starship : starship)
      };
    case DELETE_STARSHIP:
      return {...state,
        allStarships: state.allStarships.filter(starship => starship !== action.starship)
      };
    case CHANGE_STARSHIP_BELOVED_STATUS:
      return {...state,
        allStarships: state.allStarships.map((starship) => {
          return starship.id === action.id ? {...starship, beloved: !starship.beloved} : starship
      })
      };
    case EDIT_STARSHIP_DATA:
      return {...state,
        starship: {...action.starship}
      };
    case SET_FORM_ERRORS:
      return {...state,
        formErrors: {...action.formErrors}
      };
    default:
      return state;
  }
}

export default starships;
