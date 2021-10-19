import React from "react";

class LifeCycleMethods extends React.Component{
    state={favoriteColor:'red'};

    componentDidMount(){
        setTimeout(()=>{
        this.setState({favoriteColor:'blue'})
        },1000)
    }
    componentDidUpdate(){
        document.querySelector("#myDiv").innerHTML=
        `The Updated Favorite Color Is ${this.state.favoriteColor}`
    }
    render(){   

        return (
            <div className="container">
            <h1>My Favorite Color is :{this.state.favoriteColor}</h1>
            <div id="myDiv"></div>
            </div>
        )
    }
}
export default LifeCycleMethods;