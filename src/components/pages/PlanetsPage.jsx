import React from 'react'
import Listing from '../common/Listing';


export default function PlanetsPage({initialData}) {

  return (
    <Listing
      initialData={initialData}
      tableDescriptor={'Planets'}
    />
  )
}
