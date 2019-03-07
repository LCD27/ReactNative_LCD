import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import {
  AppContainer,
  Button,
} from '../common'
export default class WelcomePage extends Component{

  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation && this.props.navigation.navigate('Main')
    },2000)
  }



  render(){
    return <AppContainer style={styles.container}>
      <Text style={styles.text}>WelcomePage</Text>
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
  text:{
    fontSize:20,
    color:'blue',
  }
})
