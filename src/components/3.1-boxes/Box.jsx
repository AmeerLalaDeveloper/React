import react from 'react'

const Box = (props) => {
   
    return ( 
        <div className="box flex" >
           {props.children}
        </div>
    );
}
 
export default Box;