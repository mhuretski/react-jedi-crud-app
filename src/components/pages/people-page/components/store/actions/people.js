export const SET_PEOPLE = 'SET_PEOPLE'
export const DELETE_PERSON = 'DELETE_PERSON'
export const CHANGE_PERSON_BELOVED_STATUS = 'CHANGE_PERSON_BELOVED_STATUS'
export const ADD_PERSON = 'ADD_PERSON'
export const UPDATE_PERSON = 'UPDATE_PERSON'
export const EDIT_PERSON_DATA = 'EDIT_PERSON_DATA'
export const SET_FORM_ERRORS = 'SET_FORM_ERRORS'

export function setPeople(people) {
  return { type: SET_PEOPLE, people };
}

export function deletePerson(item) {
  return { type: DELETE_PERSON, item };
}

export function changePersonBelovedStatus(id) {
  return { type: CHANGE_PERSON_BELOVED_STATUS, id};
}

export function addPerson(person) {
  return { type: ADD_PERSON, person };
}

export function updatePerson(person) {
  return { type: UPDATE_PERSON, person };
}

export function editPersonData(person) {
  return { type: EDIT_PERSON_DATA, person };
}

export function setFormErrors(formErrors) {
  return { type: SET_FORM_ERRORS, formErrors };
}
