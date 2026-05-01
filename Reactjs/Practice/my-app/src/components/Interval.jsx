import { useState, useEffect } from "react";
                         function FetchData() { 
                            const [data, setData] = useState([]);
                         useEffect(() => { 
                            fetch("https://jsonplaceholder.typicode.com/posts")
                             .then(res => res.json())
                              .then(data => setData(data));
                            }, []);
                        return ( 
                            <ul> 
                            {data.map(item => (
                                 <li key={item.id}>{item.title}</li> 
                                 ))} </ul> );
                             } 

                            export default FetchData