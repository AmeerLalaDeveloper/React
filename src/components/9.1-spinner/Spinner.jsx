import React from "react";
import './style.css'
import Loader1 from './Loader1'
import Loader2 from './Loader2'
import Loader3 from './Loader3'
class Spinner extends React.Component{
    state={isActive:true}
    componentDidMount(){
        setTimeout(() => {
            this.setState({isActive:!this.state.isActive})
        }, 5000);
    }
    render(){
        let spinner=''
        if(this.state.isActive){
            let rand=Math.floor(Math.random()*3);
            let keys= Object.keys(this.props);
         spinner=this.props[keys[rand]]
         console.log(spinner);
        }
        return (
        <>
          {spinner}
            </>
        )

    }

}
Spinner.defaultProps={
    loader1:<Loader1></Loader1>,
    loader2:<Loader2></Loader2>,
    loader3:<Loader3></Loader3>
}
export default Spinner;