import { useEffect, useState } from "react";
import axios from "axios";


const Simplefetch = () => {

    const [title,setTitle]=useState('');
    const [director,setDirector]=useState('');



    useEffect(()=>{

      const getData=async()=>{
      const request=  await axios.get('https://swapi.dev/api/films/1/')

    setTitle(request.data.title)
    setDirector(request.data.director)
    }

     getData()

    },[])
    return ( 
        <div>
            {
              <span style={{display:'block'}}>Move Title Is {title}</span>  

            }
            { <span>Move Director is {director}</span> }
        </div>
     );
}
 
export default Simplefetch;