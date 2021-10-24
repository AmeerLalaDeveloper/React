import { useEffect, useState } from "react";

import React, { Component } from 'react'
import Avatar from "./Avatar";

export default class AvatarList extends Component {
    state={avatars:this.props.filteredAvatars};
    componentDidMount(){
        console.log('ww');
    }
    componentDidUpdate(prevProps,prevState){
        
        console.log(this.state.avatars);
    }
    render() {

     return ( 
        <div className="avatar-list">
        <ul className="list">
            {       
                 this.props.filteredAvatars.map((avatar,idx)=>{
                    return <Avatar key ={idx} name={avatar.name} img={avatar.url}/>
                 })
            }

        </ul>
        </div>
     );
    }
}

