import React from 'react'

function Condition() {
    let isValid=true;
//     let message;
//     if(isValid){
//         message="Valid"
//     }else{
//         message="not valid"
//     }
//   return (
//     <div>
//       {message}
//     </div>
//   )

// if(isValid){
//     return(<p>Valid</p>)
// }else{
//     return(<p>inValid</p>)
// }

return(
    <div>
        {/* {isValid && <p>Welcome</p>} */}
        {isValid ? <p>Valid </p>:<p>Not valid</p>}
    </div>
)
}

export default Condition
