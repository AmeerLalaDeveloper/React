import React from 'react'
import {useState} from 'react'
class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={counter:0}
    }
    setCounter=()=>{
        console.log(this.setState());
    //   this.setState({counter:this.state.counter+1})
    }
    render(){
        return (
        <div>
        <button onClick={this.setCounter}>increment</button>
        {this.state.counter}
        </div>
        )
    }
}

// const Counter=()=>{
//     const [counter,setCounter]=useState(0)
//     function onClickButton(ev){
//            ev.preventDefault();
//            setCounter(counter+1)

//     }

//     return (
//         <div>
//        <button onClick={onClickButton}>increment</button>
//         {counter}
//         </div>
//     )
// }
export default Counter;