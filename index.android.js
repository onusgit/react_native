/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import{
  AppRegistry,
  StyleSheet
} from 'react-native';

import Class1 from './classes/class1';
import Class2 from './classes/class2';
import Class3 from './classes/class3';

export default class MainPage extends Component {

  constructor() {
      super();
   }

  render(){
    return (
      <Class3 />
    );
  }

}
AppRegistry.registerComponent('demo1', ()=> MainPage);
