import React, { Component } from 'react';
import axios from '../../../axios-order'
import './EditContact.css'
class EditContact extends Component{
    state={
        nameInput:"",
        contactInput:"",
        emailInput:""

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
    async componentDidMount() {
        const idd  = (this.props.location.search.substring(1))
        const res = await axios.get(

          '/contact.json'
        );
        const contact = res.data 
        const objArray = [];
        Object.keys(contact).forEach(key => objArray.push({
            id: key,
            data: contact[key]
        }));
        var obj;
        var finalobj
        for(var id in objArray){
            obj=objArray[id]
            if(obj.id===idd){
                finalobj=obj;
                break;
            }
        }
        this.setState({
          nameInput: finalobj.data.Name,
          emailInput: finalobj.data.Email,
          contactInput: finalobj.data.Contact
        });
        // console.log(finalobj)
      }
    submitHandler=(e)=>{
        e.preventDefault();
        const idd  = (this.props.location.search.substring(1))
        const con={
            Name: this.state.nameInput,
            Email: this.state.emailInput,
            Contact: this.state.contactInput
        }
        axios.put('/contact/'+idd+'.json',con)
        .then(this.setState({nameInput:"",emailInput:"",contactInput:""}))
        .catch(error=>{console.log(error)})
        console.log(con)
    }
    deleteHandler=()=>{
        const idd  = (this.props.location.search.substring(1))
        axios.delete('/contact/'+idd+'.json')
        // this.props.history.push('/')
    }
    render(){
        return(
            <div className="form"> 
                <form onSubmit={this.submitHandler} className="form-main">
                <p>Edit Contact</p>
                    <label>Name</label>
                    <input type="text" placeholder="Edit Name..." onChange={this.setNameInput} value={this.state.nameInput}></input>
                    <label>Contact Number</label>
                    <input type="number" placeholder="Edit Contact..."  onChange={this.setContactInput} value={this.state.contactInput} ></input>
                    <label>Email</label>
                    <input type="email" placeholder="Edit Email..." onChange={this.setEmailInput} value={this.state.emailInput}></input>
                    <button>Edit Contact</button>
                    
                </form>
                <button onClick={this.deleteHandler} style={{cursor:'pointer',marginLeft:'312px'}}>Delete Contact</button>
                
            </div>
        )
    }
}

export default EditContact