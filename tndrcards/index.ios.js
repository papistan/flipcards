
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Flip from './src/components/Flip.js';

export default class tndrcards extends Component {
  render() {
    return (
        <Flip />
    );
  }
}



AppRegistry.registerComponent('tndrcards', () => tndrcards);
