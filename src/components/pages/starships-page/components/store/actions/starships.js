export const SET_STARSHIPS = 'SET_STARSHIPS'
export const DELETE_STARSHIP = 'DELETE_STARSHIP'
export const CHANGE_STARSHIP_BELOVED_STATUS = 'CHANGE_STARSHIP_BELOVED_STATUS'
export const ADD_STARSHIP = 'ADD_STARSHIP'
export const UPDATE_STARSHIP = 'UPDATE_STARSHIP'
export const EDIT_STARSHIP_DATA = 'EDIT_STARSHIP_DATA'
export const SET_FORM_ERRORS = 'SET_FORM_ERRORS'

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarship(starship) {
  return { type: DELETE_STARSHIP, starship };
}

export function changeStarshipBelovedStatus(id) {
  return { type: CHANGE_STARSHIP_BELOVED_STATUS, id};
}

export function addStarship(starship) {
  return { type: ADD_STARSHIP, starship };
}

export function updateStarship(starship) {
  return { type: UPDATE_STARSHIP, starship };
}

export function editStarshipData(starship) {
  return { type: EDIT_STARSHIP_DATA, starship };
}

export function setFormErrors(formErrors) {
  return { type: SET_FORM_ERRORS, formErrors };
}
