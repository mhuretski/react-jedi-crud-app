export const getAllStarships = state => {
  return state.starships.allStarships;
}

export const getEditedStarship = state => {
  return state.starships.starship;
}

export const getFormErrors = state => {
  return state.starships.formErrors;
}
