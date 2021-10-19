import React from "react";

class Box extends React.Component {
   
    render(){
       
    return ( 
        <div className="box" style={{
            width:this.props.width,
            height:this.props.height,
            background:this.props.bg
        }}>

        </div>
     );
    }
}
 
export default Box;