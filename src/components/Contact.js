import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return(
        <React.Fragment>
        <div>
          <img className="banner-img" src="../img/contact.png" alt="contact banner"></img>
        </div>
        <div className="row flex-container2">
            <div className="col-sm-6">
            <Form col id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <FormGroup className="col-md-8 ml-auto">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </FormGroup>
                <FormGroup className="col-md-8 ml-auto">
                    <Label htmlFor="exampleInputEmail1">Email address</Label>
                    <Input type="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </FormGroup>
                <FormGroup className="col-md-8 ml-auto">
                    <Label htmlFor="message">Message</Label>
                    <Input type="textarea" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </FormGroup>
                <div className="align-right">
                <Button type="submit" color="primary">Submit</Button>
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
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }

    resetForm() {
      this.setState({
        name: '',
        email: '',
        message: '',
      })
    }
  
    handleSubmit( e ) {
      const newLine = "\r\n";
      e.preventDefault();
      console.log(e);
      alert('Thanks for writing! We will be in touch shortly.' + newLine + newLine + this.state.name + newLine + this.state.email + newLine + this.state.message);

      const templateParams = {
        user_name: this.state.name,
        user_email: this.state.email,
        message: this.state.message
      }

      emailjs.send('contact_service', 'contact_form', templateParams, 'user_FMi4Ms7RRoHdXF8HNH3B3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      this.resetForm()
    }
  }
  
  export default Contact;