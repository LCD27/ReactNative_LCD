/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './js/common/Button'

type Props = {};
export default class App extends Component<Props> {

  _onClick = ()=>{
    console.warn('onclick')
  }

  render() {
    const MyButton = Button.getButton;
    return (
      <View style={styles.container}>
        <View style={{marginTop:20,}}/>
        <MyButton name={'react-navigation'} onClick = {this._onClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
