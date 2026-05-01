import PropTypes from 'prop-types';
 function Login({name,age}){
   console.log("Rendered Login");
    return(
       <>
        <h1>Hello {name}</h1>
        <h1>{age}</h1>
       </>
    )
}
Login.propTypes = {
  name: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired
};
 export default Login