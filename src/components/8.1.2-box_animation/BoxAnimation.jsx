import React from "react";
import './style.css'
import Box from "./Box";
class BoxAnimation extends React.Component{
    state={oneSec:false , flag:false}

    componentDidMount(){
            setTimeout(()=>{
             this.setState({oneSec:!this.state.oneSec})
            },1000)
    }
    componentDidUpdate(){  
        let div=document.querySelector('.container')
        div.animate(
            [
                { transform: 'translateX(-400px)' },
                { transform: 'translateX(-300px)' },
                { transform: 'translateX(-200px)' },
                { transform: 'translateX(-100px)' }  
            ],{
                duration:4000,
                iterations:1
            }
        )     
        
    }
    render(){
        
        return(
            <div className="container">
            <Box width="100px" height="100px" bg="red" />
          <Box width="300px" height="300px" bg="blue" />
          <Box width="200px" height="200px" bg="green" />
        </div>
        )
    }
}
export default BoxAnimation;