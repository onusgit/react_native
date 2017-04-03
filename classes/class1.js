import React, {Component} from 'react';
import{
  AppRegistry,
  Text,
} from 'react-native';

import Class2 from './class2';

export default class Class1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  updateEmail(text){
    this.setState({
      email: text
    })
  }

  updatePassword(text){
    this.setState({
      password: text
    })
  }

  updateLogin(text){
      alert('email: '+this.state.email + ' password: '+ this.state.password)
  }

  render(){
    return(
      <Class2
        updateEmail = {this.updateEmail.bind(this)}
        updatePassword = {this.updatePassword.bind(this)}
        updateLogin = {this.updateLogin.bind(this)}
      />
    )
  };
}

AppRegistry.registerComponent('classes', ()=> Class1);
