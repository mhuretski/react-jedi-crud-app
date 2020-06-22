import React from 'react'
import Listing from '../common/Listing';
import {getPeople} from '../service/swApiService';


export default function PeoplePage() {

  return (
    <Listing
      getInitialRestData={getPeople}
      tableDescriptor={'People'}
      elementToAdd={'Person'}
      columnStorage={'peopleColumns'}
      dataStorage={'peopleData'}
    />
  )
}
