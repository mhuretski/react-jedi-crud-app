import React from 'react'
import Listing from '../common/Listing';
import {getStarships} from '../service/swApiService';


export default function StarshipsPage() {

  return (
    <Listing
      getInitialRestData={getStarships}
      tableDescriptor={'Starships'}
      elementToAdd={'Starship'}
      columnStorage={'starshipColumns'}
      dataStorage={'starshipData'}
    />
  )
}
