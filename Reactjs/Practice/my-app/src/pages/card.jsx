import React from 'react'

function Card() {
    function buy(){
        alert("purchased")
    }
  return (
    <div className='card'>
      <img src='image.jpg' alt='img' style={{width:"25%"}}/>
      <h2>Product</h2>
      <button onClick={buy}>Buy</button>
    </div>
  )
}

export default Card
