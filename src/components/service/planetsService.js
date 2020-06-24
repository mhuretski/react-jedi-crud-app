import {nanoid} from "nanoid";

export const planetsColumns = [
  'name',
  'rotation_period',
  'terrain',
  'diameter',
  'orbital_period',
  'population'
]

export const getPlanets = async () => {
  const planetsResponse = await (await fetch('https://swapi.dev/api/planets')).json();
  return  planetsResponse.results.map(({name, rotation_period, terrain, diameter, orbital_period, population}) => ({
    name,
    rotation_period,
    terrain,
    diameter,
    orbital_period,
    population,
    beloved: false,
    id: nanoid()
  }))
}
