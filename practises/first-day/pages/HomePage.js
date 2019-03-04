import React,{Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import {
  AppContainer
} from '../../../js/common'
export default class HomePage extends Component{
  render(){
      return <AppContainer style={styles.container}>
        <Text>HomePage</Text>
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
