import { useState } from "react";

const Text = ({text,len}) => {
    const [textLen,setTextLen]=useState(len)
    const [isClicked,setIsClicked]=useState(false)
    const click=()=>{
        
        if(!isClicked)
        setTextLen(text.length)
        else 
        setTextLen(len)

        setIsClicked(!isClicked)
    }
    return (
        <div>
            {text.slice(0,textLen)}
            {
                <button onClick={()=>click()}>{text.length>len&&!isClicked?'show more':'show less'}</button>
            }
        </div>
    )
      
}
 
export default Text;