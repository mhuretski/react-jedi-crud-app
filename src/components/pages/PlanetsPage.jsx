import React from 'react'
import Listing from '../common/Listing';
import {getPlanets} from '../service/swApiService';


export default function PlanetsPage() {

  return (
    <Listing
      getInitialRestData={getPlanets}
      tableDescriptor={'Planets'}
      elementToAdd={'Planet'}
      columnStorage={'planetColumns'}
      dataStorage={'planetData'}
    />
  )
}
