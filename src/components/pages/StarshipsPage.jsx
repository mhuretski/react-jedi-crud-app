import React from 'react'
import Listing from '../common/Listing';


export default function StarshipsPage({initialData}) {

  return (
    <Listing
      initialData={initialData}
      tableDescriptor={'Starships'}
    />
  )
}
