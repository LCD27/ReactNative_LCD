import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import {
  AppContainer
} from '../common'

export default class HomePage extends Component{
  render(){
    // console.warn(this.props.navigation)
      return <AppContainer style={styles.container}>
        <Text>homepage</Text>
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
