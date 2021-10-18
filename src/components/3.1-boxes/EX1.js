import React from 'react';
import Box from './Box'
// const Index = () => {
   
// }
 


class Index extends React.Component{

    constructor(props){
        super(props)
        }
    render(){

 return ( 
        <div>
            <Box>
        <div className="box-1 flex">
        <div className="box-2 flex">
            <div className="box-3"></div>
            <div className="box-3"></div>
        </div>
       </div>
            </Box>
        </div>
     );
    }
}export default Index;