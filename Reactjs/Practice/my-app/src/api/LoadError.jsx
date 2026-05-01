import React from 'react'
import axios from "axios";
import { useState } from "react";

function LoadError() {
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchUsers = async () => {
setLoading(true);
setError(null);

try {
const res = await axios.get("https://jsonplaceholder.typicodeinvalid.com/users");
const data = res.data;
setLoading(false)
} catch (err) {
setLoading(false)
setError(err.message);
}
}
  return (
    <div>
        {loading?<p>Loading....</p>:null}
      <button onClick={fetchUsers}>Fetch</button>
       {error!=null?<p>{error}</p>:null}
    </div>
  )
}

export default LoadError
