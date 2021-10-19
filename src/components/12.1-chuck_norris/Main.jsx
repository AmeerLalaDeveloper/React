import React from "react";
import './style.css'
import DisplayCategory from './DisplayCategory'
import SearchBar from "./SearchBar";
// import Spinner from "./Spinner";
import RandomButton from "./RandomButton";
// import axios from "axios";
class Main extends React.Component{
    state={isClicked:false,result:null}

    getRandomJoke=async(val='')=>{
        const response=await(await fetch(`https://api.chucknorris.io/jokes/random${val}`)).json()
        return response
    }
    userClicked=(val)=>{
         this.getRandomJoke().then(res=>{
             this.setState({result:res.value})
         });
    }
    getSelectValue=(val)=>{
        this.getRandomJoke(`?category=${val}`).then(res=>{
             this.setState({result:res.value})
        })
    }
    onSubmitQuery=(query)=>{
        this.getRandomJoke(`?query=${query}`).then(res=>{
             this.setState({result:res.value})
        })

    }
    render(){    
        return(
            <div className="container">
                <RandomButton click={this.userClicked}></RandomButton>
                <DisplayCategory select={this.getSelectValue}></DisplayCategory>
                <SearchBar submit={this.onSubmitQuery}></SearchBar>
                <span className="result">
                {this.state.result}
                </span>
            </div>
        )
    }


}
export default Main;