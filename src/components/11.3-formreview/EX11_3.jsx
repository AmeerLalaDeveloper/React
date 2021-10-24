import Input from "./Input";
import './EX11_3.css'
import { useEffect, useState } from "react";
import TextArea from "./textarea";
import Select from "./Select";
const EX11_3 = () => {
    const [Form,setForm]=useState('block')
    const [result,setResult]=useState('none')
    const [firstName,setFirstName]=useState('Ameer')
    const [lastName,setLastName]=useState('Lala')
    const [text,setText]=useState('some text')
    const [selectValue,setSelect]=useState(20)
    function onFormSubmit(e){
        e.preventDefault()
        setForm('none')
        setResult('block')
        localStorage.setItem('form',`${firstName},${lastName},${selectValue},${text}`)
      
    }
    useEffect(()=>{
        if(localStorage.getItem('form')){
           let data= localStorage.getItem('form')
           data.split(',').forEach(item=>{
            setFirstName(item)
            setLastName(item)  
            setSelect(item)
            setText(item)  
           })

        }
 },[])
    return ( 
        <>
        <form style ={{display:Form}} onSubmit={(e)=> onFormSubmit(e)}>  
            <Input onsubmit={setFirstName}></Input>
            <Input onsubmit={setLastName}></Input>
            <Select onsubmit={setSelect}></Select>
            <TextArea onsubmit={setText}></TextArea>
            <input type="submit"  value="Submit" />
        </form>
        <div className="result" style={{display:result}}>
            firstName is :{firstName} <br/>
            lastName is :{lastName}<br/>
            age is :{selectValue}<br/>
            Text is :{text}<br/>
            <button onClick={(e)=>{setResult('none'); setForm('block')}}>back</button>
        </div>
        </>
     );
}
 
export default EX11_3;