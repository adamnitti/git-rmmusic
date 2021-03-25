import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FormErrors } from './FormErrors';

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        formErrors: {name: '', email: '', message: ''},
        nameValid: false,
        emailValid: false,
        messageValid: false
      }
    }
  
    render() {
      return(
        <React.Fragment>
        <div>
          <img className="banner-img" src="../img/contact.png" alt="contact banner"></img>
        </div>
        <div className="row flex-container2">
            <div className="col-sm-6">
              <Form col id="contact-form" onSubmit={(event) => this.handleSubmit(event)} >
                  <FormGroup className="col-md-8 ml-auto">
                      <Label htmlFor="name">Name</Label>
                      <Input name="name" type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.name} id='name' />
                  </FormGroup>
                  <FormGroup className="col-md-8 ml-auto">
                      <Label htmlFor="email">Email address</Label>
                      <Input name="email" type="text" onChange={(event) => this.handleUserInput(event)} value={this.state.email} id='email'/>
                  </FormGroup>
                  <FormGroup className="col-md-8 ml-auto">
                      <Label htmlFor="message">Message</Label>
                      <Input name="message" type="textarea" rows="5" onChange={(event) => this.handleUserInput(event)} value={this.state.message} id='message'/>
                  </FormGroup>
                  <div className="error-mess col align-right">
                  <FormErrors formErrors={this.state.formErrors} />
                  </div>
                  <div className="col align-right">
                    <Button type="submit" color="primary" disabled={!(this.state.emailValid && this.state.nameValid && this.state.messageValid)}>Submit</Button>
                  </div>
              </Form>
            </div>
            <div className="col-sm-4 align-left">
                <h1>Let's Chat</h1>
                <h5>We would love the opportunity to work with you and help you achieve your musical vision!</h5>
                <h5>Submit your inquiry via this form or just give us a call at 615.289.6533. You can also email us directly at <a href="mailto:rmmusic@mail.com"><h3>RMMusic@mail.com.</h3></a></h5>
            </div>
          </div>
        </React.Fragment>
      );
    }

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log('updating input');
      this.setState(({[name]: value}), () => { this.validateField(name, value)});  
    }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let nameValid = this.state.nameValid;
      let emailValid = this.state.emailValid;
      let messageValid = this.state.messageValid;
      console.log(fieldName, value); 
    
      switch(fieldName) {
        case 'name':
          console.log('checking name');
          nameValid = value.length >= 2;
          fieldValidationErrors.name = nameValid ? '': ' is too short';
          break;
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'message':
          messageValid = value.length >= 2;
          fieldValidationErrors.message = messageValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        messageValid: messageValid
      }, this.validateForm);
    };
    
    validateForm() {
      this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid});
    };

    resetForm() {
      console.log('in reset method');
      this.setState({
        name: '',
        email: '',
        message: '',
        formErrors: {name: '', email: '', message: ''},
        nameValid: false,
        emailValid: false,
        messageValid: false
      })
    };

    handleSubmit(e) {

      const newLine = "\r\n";
      e.preventDefault();
      console.log(this.state.name);
      alert(`Message sent successfully from ` + newLine + this.state.name + newLine + this.state.email + newLine + `We will be in touch shortly.`);

      const templateParams = {
        user_name: this.state.name,
        user_email: this.state.email,
        message: this.state.message
      };

      emailjs.send('contact_service', 'contact_form', templateParams, 'user_FMi4Ms7RRoHdXF8HNH3B3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        this.resetForm();
       
      }
    };  


export default Contact;