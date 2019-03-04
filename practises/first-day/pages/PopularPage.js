import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import Toast from 'react-native-root-toast'

import {
  AppContainer,
  Button,
} from '../../../js/common'
export default class PopularPage extends Component{

  _onClick = ()=>{
    Toast.show('TopTab')
  }


  render(){
    const MyButton = Button.getButton;
    return <AppContainer style={styles.container}>
      <MyButton name={'TopTab'} onClick = {this._onClick}/>
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
