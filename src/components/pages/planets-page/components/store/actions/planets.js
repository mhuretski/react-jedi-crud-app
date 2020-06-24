export const SET_PLANETS = 'SET_PLANETS'
export const DELETE_PLANET = 'DELETE_PLANET'
export const CHANGE_PLANET_BELOVED_STATUS = 'CHANGE_PLANET_BELOVED_STATUS'
export const ADD_PLANET = 'ADD_PLANET'
export const UPDATE_PLANET = 'UPDATE_PLANET'
export const EDIT_PLANET_DATA = 'EDIT_PLANET_DATA'
export const SET_FORM_ERRORS = 'SET_FORM_ERRORS'

export function setPlanet(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(planet) {
  return { type: DELETE_PLANET, planet };
}

export function changePlanetBelovedStatus(id) {
  return { type: CHANGE_PLANET_BELOVED_STATUS, id};
}

export function addPlanet(planet) {
  return { type: ADD_PLANET, planet };
}

export function updatePlanet(planet) {
  return { type: UPDATE_PLANET, planet };
}

export function editPlanetData(planet) {
  return { type: EDIT_PLANET_DATA, planet };
}

export function setFormErrors(formErrors) {
  return { type: SET_FORM_ERRORS, formErrors };
}
