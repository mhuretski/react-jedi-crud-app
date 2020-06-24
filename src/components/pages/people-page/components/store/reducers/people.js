import {
  SET_PEOPLE,
  DELETE_PERSON,
  CHANGE_PERSON_BELOVED_STATUS,
  ADD_PERSON,
  UPDATE_PERSON,
  EDIT_PERSON_DATA,
  SET_FORM_ERRORS
} from '../actions/people';
import {initialData} from '../../../PeoplePage';


const initialState = {
  allPeople: [],
  person: initialData,
  formErrors: {},
}

function people(state = initialState, action) {
  switch(action.type) {
    case SET_PEOPLE:
      return {...state,
        allPeople: action.people
      };
    case ADD_PERSON:
      state.allPeople.push(action.person)
      return {...state}
    case UPDATE_PERSON:
      return {...state,
        allPeople: state.allPeople.map(person =>
          (person.id === action.person.id) ? action.person : person)
      };
    case DELETE_PERSON:
      return {...state,
        allPeople: state.allPeople.filter(person => person !== action.item)
      };
    case CHANGE_PERSON_BELOVED_STATUS:
      return {...state,
        allPeople: state.allPeople.map((person) => {
          return person.id === action.id ? {...person, beloved: !person.beloved} : person
      })
      };
    case EDIT_PERSON_DATA:
      return {...state,
        person: {...action.person}
      };
    case SET_FORM_ERRORS:
      return {...state,
        formErrors: {...action.formErrors}
      };
    default:
      return state;
  }
}

export default people;
