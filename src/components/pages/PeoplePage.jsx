import React from 'react'
import Listing from '../common/Listing';


export default function PeoplePage({initialData}) {

  return (
    <Listing
      initialData={initialData}
      tableDescriptor={'People'}
    />
  )
}
