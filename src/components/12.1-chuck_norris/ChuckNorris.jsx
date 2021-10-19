import React from "react";
import './style.css'
import DisplayCategory from './DisplayCategory'
import SearchBar from "./SearchBar";
import RandomButton from "./RandomButton";

class ChuckNorris extends React.Component{
    state={isClicked:false,result:null}
    getRandomJoke=async(val='')=>{
        const response=await(await fetch(`https://api.chucknorris.io/jokes/random/${val}`)).json()
        return response
    }
    userClicked=async ()=>{
        let data=await this.getRandomJoke();
        this.setState({result:data.value});
    }
    getSelectValue=async(val)=>{
        let data=await this.getRandomJoke(val);
        this.setState({result:data.value});
    }
    onSubmitQuery=async(query)=>{
        let data=await this.getRandomJoke(query);
        this.setState({result:data.value});
    }
    render(){ 
        return(
            <div className="container">
               
                <RandomButton click={this.userClicked}></RandomButton>
                <DisplayCategory select={this.getSelectValue}></DisplayCategory>
                <SearchBar submit={this.onSubmitQuery}></SearchBar>
               {
                  this.state.result==null?
                   <div className="spinner-2"></div>
                   :<span className="result">{this.state.result}</span>
                }     
            </div>
        )
    }
}
export default ChuckNorris;