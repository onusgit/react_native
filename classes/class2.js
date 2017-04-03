import React, {Component} from 'react';
import{
  AppRegistry,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class Class2 extends Component {
  onPress(){
      this.props.updateLogin(this.props.email, this.props.password)
  };
  render(){
    return(
      <View style = {styles.container}>
        <TextInput
          style = {styles.emailInput}
          placeholder = 'Enter email'
          onChangeText = {this.props.updateEmail}
        />

        <TextInput
          style = {styles.passwordInput}
          placeholder = 'Enter password'
          onChangeText = {this.props.updatePassword}
        />

        <TouchableHighlight style = {styles.btnSubmit}
          onPress = { () => this.onPress()}
          >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  },

  emailInput: {
    margin: 15,
    width:200,
    height: 40,
    borderColor: 'green',
    borderWidth: 1
  },

  passwordInput: {
    margin: 15,
    width:200,
    height: 40,
    borderColor: 'pink',
    borderWidth: 1
  },

  btnSubmit: {
    backgroundColor: 'blue',
    padding: 10
  }
});

AppRegistry.registerComponent('classes', ()=> Class2);
