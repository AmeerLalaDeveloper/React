import React from "react";
// const Button = (props) => {

// }
 


class Button extends React.Component{

    constructor(props){
        super(props)
        this.props=props;
        
       
    }
    render(){
    return (
    <button value={this.props.val}>{this.props.val}</button>       
     )
    }

}
export default Button;