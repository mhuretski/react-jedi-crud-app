export const getAllPeople = state => {
  return state.people.allPeople;
}

export const getEditedPerson = state => {
  return state.people.person;
}

export const getFormErrors = state => {
  return state.people.formErrors;
}
