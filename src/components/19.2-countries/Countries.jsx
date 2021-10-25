import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput'
const Countries = () => {
    const[results,setResults]=useState([])
    const [term,setTerm]=useState('usa')

    useEffect(()=>{
        const data=async()=>{
            try{
           const res= await axios.get(`https://restcountries.com/v3.1/name/${term}`);
           setResults(res.data);
            }
            catch(e)
            {console.log('mhmd')}
        }
        data().catch(e=>console.log(e))
       
    },[term])

    return (
        <div>
            <span>Search : </span>
            <SearchInput text={setTerm}></SearchInput>
           <ul>
        {
            results.map(country=>{
                
              return <li key={country.name.official}>{ country.name.official}</li>
            })
        }
           </ul>
        </div>
      );
}
 
export default Countries;