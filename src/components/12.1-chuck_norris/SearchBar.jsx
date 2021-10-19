import React from "react";
class SearchBar extends React.Component{
    state={value:''}
    render(){
        return (
            <>
            <form type="submit" onSubmit={
                (e)=>{
                    e.preventDefault()    
                this.props.submit(e.target.lastChild.value)
            }}>
                <input type="text" name="userInput" id="userInput"
                onChange={(e)=>{     
                    this.setState({value:e.target.value})
                }}
                value={this.state.value}
            placeholder="Enter Query..." />
            </form>
            </>

        );
    }


}
export default SearchBar;