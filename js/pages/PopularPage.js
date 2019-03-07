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
import NavigationUtil from "../navigators/NavigationUtil";
export default class PopularPage extends Component{

  _onClick = ()=>{
    this.props.navigation.navigate('MaterialTopTabNavigator')
  }


  render(){
    const MyButton = Button.getButton;
    // console.warn(this.props)
    if(!NavigationUtil.navigation){
      NavigationUtil.navigation=this.props.navigation
    }
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
