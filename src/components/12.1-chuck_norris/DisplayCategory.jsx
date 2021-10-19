import React from "react"

class DisplayCategory extends React.Component {
    state={categoriesNames:null,options:'',oneUpdate:false}
    getCategories=async()=>{
        const response= await(await fetch('https://api.chucknorris.io/jokes/categories')).json()
        return response
    }
    componentDidMount(){
        this.getCategories().then(res=>{
            this.setState({categoriesNames:res})
        })
    }
    shouldComponentUpdate(){
      if(this.state.oneUpdate==false)
        return true;
        return false;
    }
    componentDidUpdate(){
       this.setState({

           options: <select name="selector" onChange={()=>{
               this.props.select('?category='+document.querySelector('select').value)
           }} id="selector">
           {
              this.state.categoriesNames.map((item,idx)=>{
                   return <option key={idx} value={item}>{item}</option>
               })
           }
       </select>,
       oneUpdate:true
        }) 
    }
    render(){
    return (
            <div className="box">
       <span>Choose Category:</span>  
        {this.state.options}
        </div>
      );
    }
}
 
export default DisplayCategory;