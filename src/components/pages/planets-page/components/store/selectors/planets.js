export const getAllPlanets = state => {
  return state.planets.allPlanets;
}

export const getEditedPlanet = state => {
  return state.planets.planet;
}

export const getFormErrors = state => {
  return state.planets.formErrors;
}
