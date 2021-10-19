import React from "react";
class Box extends React.Component{
    state={startChange:false , index:0 ,color:'red' ,radius:'0'}
   
    componentDidMount(){
        this.setState({startChange:!this.state.startChange,
        index:this.state.index+1})
    }
    shouldComponentUpdate(){
        if(this.state.index==6){
        return false;
        }
        return true
    }
    
    componentDidUpdate(){
          if(this.state.index<5){
         const colors=['blue','green','purple','yellow','black']
        setTimeout(()=>{
            this.setState({color:colors[this.state.index],
            index:this.state.index+1})
        },500)
    }
    if(this.state.index==5){
        setTimeout(()=>{
        this.setState({radius:'50%'})
        this.setState({index:this.state.index+1})
        },500)
    }
    }
    render(){
        return <div className="box" style={{
            width:'200px',
            height:'200px',
            background:this.state.color
            ,borderRadius:this.state.radius
        }}></div>
    }
}
export default Box;