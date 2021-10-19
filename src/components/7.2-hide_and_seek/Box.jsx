import { useState } from "react";
import './style.css'
import React from 'react'
// const Box = () => {
//     const [isClicked,setIsClicked]=useState(false)
//     function setClick(e){
//         e.preventDefault();
//        isClicked?setIsClicked(false):setIsClicked(true)
//     }
//     return ( 
//         <div className="container">
//         <button onClick={setClick}>Show/Hide</button>
//         {/* //If Button Not Clicked  */}
//     {!isClicked?<div className='box'></div>:<div className='box yellow'></div>}
//      </div>
//     )
// }
 
class Box extends React.Component{

    constructor(){
        super()
        this.state={isClicked:false}
    }
      setClick=(e)=>{
      
      !this.state.isClicked
      ?this.setState({isClicked:true})
      :this.setState({isClicked:false}) 
    }
    render(){
        return(
        <div className="container"><button onClick={this.setClick}>{this.state.isClicked?'Hide':'Show'}</button>
     {
     !this.state.isClicked?
     <div className='box'></div>:
     <div className='box yellow'></div>
     }
    </div>
        )
    }
}
export default Box;