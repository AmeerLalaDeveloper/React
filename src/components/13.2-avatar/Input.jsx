import React, { Component } from 'react'

export default class Input extends Component {
    state={result:[],value:''}
    render() {
        return (
            <input type="text" value={this.state.value} onChange={
                (e)=>{  
                    this.setState({value:e.target.value},()=>{
                        this.props.getInput(this.state.value)
                    })
                }   
            } />
           
        )
    }
}
