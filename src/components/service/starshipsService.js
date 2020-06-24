import {nanoid} from "nanoid";

export const starshipsColumns = [
  'name',
  'model',
  'manufacturer',
  'length',
  'crew',
  'cargo_capacity'
]

export const getStarships = async () => {
  const starshipsResponse = await (await fetch('https://swapi.dev/api/starships')).json();
  return  starshipsResponse.results.map(({name, model, manufacturer, length, crew, cargo_capacity}) => ({
    name,
    model,
    manufacturer,
    length,
    crew,
    cargo_capacity,
    beloved: false,
    id: nanoid()
  }))
}
