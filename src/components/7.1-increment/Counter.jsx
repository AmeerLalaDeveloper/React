import React from 'react'
import {useState} from 'react'
// class Counter extends React.Component{

//     constructor(props){
//         super(props)
//         this.props=props;
//         this.state={counter:0}
//     }

//     render(){


//         return (
//         <div>
//         <button onClick={()=>{

//             this.setState({counter:this.state.counter+1})
//         }}>increment</button>
//         {this.state.counter}
//         </div>
//         )
//     }
// }

const Counter=()=>{
    const [counter,setCounter]=useState(0)
    function onClickButton(ev){
           ev.preventDefault();
           setCounter(counter+1)

    }

    return (
        <div>
       <button onClick={onClickButton}>increment</button>
        {counter}
        </div>
    )
}
export default Counter;