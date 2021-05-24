import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './contact.css'
class contact extends Component{
    
    render(){
        
        return(
            
            <div className="contact">
                <p>{this.props.name} (Click <NavLink to={{pathname:'/contact/edit',search:"?"+this.props.id}}>here</NavLink> to edit contact)</p>
                <p>{this.props.email}</p>
                <p>{this.props.contact}</p>
                
            </div>
        )
    
}
}

export default contact