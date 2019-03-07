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
} from '../common'
export default class FavoritePage extends Component{

  _onClick = ()=>{
    // NavigationUtil.navigate('MyPage')
    this.props.navigation.navigate('HomePage')
  }


  render(){
    const MyButton = Button.getButton;
    // console.warn(this.props.navigation)
    return <AppContainer style={styles.container}>
      <MyButton name={'aaa'} onClick = {this._onClick}/>
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
})
