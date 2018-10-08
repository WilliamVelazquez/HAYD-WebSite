import React, {Component} from 'react';

import Header from '../components/header';
import ContactForm from '../components/contact-form';

class Contacto extends Component{
  state={
    name:'',
    email:'',
    phone:'',
    comments:'',
    askForCall:false
  }

  changeName = (name) => {
    this.setState({
      name
    });
  }

  changeEmail = (email) => {
    this.setState({
      email
    });
  }

  changePhone = (phone) => {
    this.setState({
      phone
    });
  }

  changeComments = (comments) => {
    this.setState({
      comments
    });
  }

  changeAskForCall = (askForCall) => {
    this.setState({
      askForCall:!this.state.askForCall
    });
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Header active="Contacto" />
        <ContactForm 
          {...this.state}
          changeName={this.changeName}
          changeEmail={this.changeEmail}
          changePhone={this.changePhone}
          changeComments={this.changeComments}
          changeAskForCall={this.changeAskForCall}
          handleSubmit={this.handleSubmit}
        />

        <style jsx global>{`
          body{
            margin: 0;
            margin-top: 100px;
            font-family: system-ui;
            background: #052A4F;
          }
        `}</style>
      </div>
    );
  }
}

export default Contacto;