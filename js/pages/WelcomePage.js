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
    },300)
  }



  render(){
    return <AppContainer style={styles.container}>
      <Button.getButton name={'next'}/>
      <Text style={styles.text}>WelcomePage</Text>
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd1',
  },
  text:{
    fontSize:20,
    color:'blue',
  }
})
