import Button from "./Button";
import React,{useState} from 'react';
const colors=['blue','red','black']
const Main = () => {
    const [color,setColor]=useState('')

  function buttonColor(color){
        setColor(color)
    }
    return (
        <div>
            
            {  colors.map((color,idx)=>
        <Button key ={idx}color={color} getColor={buttonColor}/>
                )
            }
            The  selected  color is :{color}
        </div>
      );
}
 
export default Main;