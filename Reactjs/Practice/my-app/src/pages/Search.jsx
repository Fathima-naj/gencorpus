import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  let [params] =useSearchParams()
  let name=params.get("name")
  let price=params.get("price")
  return (
    <div>
      search page
      <h2>{name}-{price}</h2>
    </div>
  )
}

export default Search
