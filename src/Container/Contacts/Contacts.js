import React, { Component } from 'react';
import axios from '../../axios-order';
import Contact from '../../Component/Contact/Contact'
import './Contacts.css'
class Contacts extends Component{
    state={
        nameInput: "",
        emailInput: "",
        contactInput: "",
        contact:[]
    }
    componentDidMount(){
        const contact=[]
        axios.get('/contact.json')
        .then((res)=>{
        for(let key in res.data){
            contact.push({...this.state,nameInput: res.data[key].Name, emailInput:res.data[key].Email, contactInput:res.data[key].Contact})
        }
        this.setState({contact:contact}) })
    }
    render(){
        return(
            <div>
                <div className="head"><span>Contact</span> List</div>
                {
                    this.state.contact.map((res,key)=>(<Contact name={res.nameInput} 
                                                                email={res.emailInput} 
                                                                contact={res.contactInput} 
                                                                key={key} />))
                }
            </div>
        )
    }
}

export default Contacts