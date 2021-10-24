import React, { Component } from 'react'

export default class Avatar extends Component {
    render() {
        return (
            <div className="avatar">
                <h2 className="name">{this.props.name}</h2>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}
