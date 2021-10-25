import { useState } from "react";

const SearchInput = ({text}) => {

  
    return (  
        <input type="text" onChange={e=>text(e.target.value)}
             />
    );
}
 
export default SearchInput;