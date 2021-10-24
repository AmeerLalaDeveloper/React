// import Avatar from './Avatar'

import Input from './Input'
import AvatarList from './AvatarList';
import React from "react";
import './style.css'


export default class EX13_2 extends React.Component {

        state={data:[],input:'',avatarList:[]}

        getData=async()=>{
        const apiData =  await (await fetch('https://randomuser.me/api/?results=10')).json()
        return apiData.results
        } 
        
        
        restructureData=(data)=>{
            return data.map(item=>{
                return {
                    name:item.name.first+' '+item.name.last,
                    url:item.picture.large
                }
            })
        }
        componentDidMount=async()=>{
            let data=await this.getData();
            data=this.restructureData(data)
            this.setState({data:data})

        }
        filteredAvatars=()=>{
            let arr=[]
            arr=this.state.data.filter(item=>
            item.name.toLowerCase().indexOf(this.state.input.toLowerCase())!=-1
            )
           return this.state.input!==''? arr:this.state.data;
        }

        getInput=(val)=>{
        this.setState({input:val})     
        }
      
    render() {
        return ( 
        <div className="container">
        <Input data={this.state.data} getInput={this.getInput}/>
        {
    
        <AvatarList filteredAvatars={this.filteredAvatars()}/>
    
        }
        </div>
     );
    }
}


