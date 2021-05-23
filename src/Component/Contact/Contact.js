import React from 'react';
import './contact.css'
const contact =(props)=>{
  
        return(
            <div className="contact">
                <p>{props.name}</p>
                <p>{props.email}</p>
                <p>{props.contact}</p>
            </div>
        )
    
}

export default contact