import React from 'react';
import './EX4_2.css'


class Card extends React.Component{

    constructor(props){
        super(props)
        this.props=props;
    }

    render(){
        return ( 
        <div className='card'>
            <img src={this.props.img} alt="" />
        <h2 className="title">{this.props.title}</h2>
        <p className="des">{this.props.description}</p>
        {this.props.children?this.props.children:''}
        </div>
     );

    }
}
export default Card;