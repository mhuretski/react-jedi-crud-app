import {LOADING} from '../actions/loading';

const initialState = false

function loading(state = initialState, action) {
  switch(action.type) {
    case LOADING:
      return action.status
    default:
      return state;
  }
}

export default loading;
