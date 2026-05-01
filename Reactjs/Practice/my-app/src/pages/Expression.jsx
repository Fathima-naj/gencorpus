import React, { Children } from 'react'


function Expression() {
  let name="Sara"
  let sum=2+2
  let age=18
  function greet(){
    return "Good morning"
  }
  let message;
  if(true){
    message="hello"
  }else{
    message="hi"
  }

  return (
    <div>
     <h1>Hello {name}</h1>
     <p>2+2={sum}</p>
     <p>{age==10?"Child":"Adult"}</p>
     <p>{age==10 && "child"}</p>
     <p>{message}</p>
     <h1>{greet()}</h1>
    </div>
  )
}

export default Expression
