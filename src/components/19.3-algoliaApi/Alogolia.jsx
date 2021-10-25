import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

const Alogolia = () => {
    const [query,setQuery]=useState('hooks')
    const [isClicked,setClick]=useState(false)
    const [results,setResults]=useState([])
    useEffect(()=>{
        const search=async()=>{
           const res= await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
           setResults(res.data.hits)
        }
        search();

    },[isClicked])
    const handleClick=()=>{
        setClick(!isClicked)
    }
    return (
        <div>
            <SearchInput text={setQuery}></SearchInput>
            <button onClick={e=>handleClick()}>Search</button>
            <ul>
                {
                    results.map(item=>{

                        return <a href ={item.url} key={item.title}>{item.title}</a>
                    })
                }
            </ul>
        </div>
      );
}
 
export default Alogolia;