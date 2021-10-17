import react from 'react'
import './style.css'

const Box = (props) => {
   
    return ( 
        <div className="box flex" >
           {props.children}
        </div>
    );
}
 
export default Box;