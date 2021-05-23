import React, { Component } from 'react';
import axios from '../../axios-order'
import './Contact-Add.css'
import {Redirect,Link , NavLink} from 'react-router-dom'
class Contacts extends Component{
    state={
        nameInput: "",
        emailInput: "",
        contactInput: ""

    }
    setNameInput=(e)=>{
        this.setState({nameInput: e.target.value})
    }
    setContactInput=(e)=>{
        this.setState({contactInput: e.target.value})
    }
    setEmailInput=(e)=>{
        this.setState({emailInput: e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault();
        const contact={
            Name: this.state.nameInput,
            Email: this.state.emailInput,
            Contact: this.state.contactInput
        };

        axios.post('/contact.json',contact)
        .then(this.setState({nameInput:"",emailInput:"",contactInput:""}))
        .catch(error=>{console.log(error)})
        // this.props.history.push('/');
        
    }
    render(){
        return(
            <div className="form">
                
                <form onSubmit={this.submitHandler} className="form-main">
                <p>Add Contact</p>
                    <label>Name</label>
                    <input type="text" placeholder="Add Name..." onChange={this.setNameInput} value={this.state.nameInput}></input>
                    <label>Contact Number</label>
                    <input type="number" placeholder="Add Contact..."  onChange={this.setContactInput} value={this.state.contactInput} ></input>
                    <label>Email</label>
                    <input type="email" placeholder="Add Email..." onChange={this.setEmailInput} value={this.state.emailInput}></input>
                    <button>Add Contact</button>
                </form>
            </div>
        )
    }
}

export default Contacts