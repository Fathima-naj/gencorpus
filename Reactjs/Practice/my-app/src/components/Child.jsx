import React from 'react'
import PropTypes from "prop-types";

function Child({name="Sara",age,onClick}) {
  return (
    <div>
      <h2>Hello , {name}</h2>
      <h2>{age}</h2>
      <button onClick={onClick}>Click me </button>
    </div>
  )
}
Child.propTypes={
  name:PropTypes.string,
  age:PropTypes.number
}

export default Child
