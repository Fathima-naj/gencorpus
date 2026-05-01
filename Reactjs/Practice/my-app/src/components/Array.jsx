import React from 'react'

function Array() {
    let fruits=["Apple","Orange","Mango"]
    let users=[
        {id:1,name:"Arun"},
        {id:2,name:"Sara"}
    ]
  return (
    <div>
      <ul>
        {/* {fruits.map((item)=>(
            <li>{item}</li>
        ))} */}

        {/* {users.map((user)=>(
            <li>{user.name}</li>
        ))} */}

        {/* <h2>conditional rendering</h2>
        {fruits.map((item)=>(
            item=="Apple"?<p>Is Apple :{item}</p>:<p>{item}</p>
        ))} */}

        <h2>Empty list :</h2>
        {fruits.length==0?(<p>No items</p>):(
            fruits.map((item,index)=>(
                <p key={index}>{item}</p>
            ))
        )}
      </ul>
    </div>
  )
}

export default Array
