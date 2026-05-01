import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const isAuth=true;
  return (
    <div>
      {isAuth?children:<Navigate to='/form'/>}
    </div>
  )
}

export default PrivateRoute
