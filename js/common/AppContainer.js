import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Platform,
    SafeAreaView
} from 'react-native'
export default class AppContainer extends Component{
  props:{
      style?:Object,
  }

  render(){
    return  <SafeAreaView style={[styles.container,this.props.style]}>
      {this.props.children}
    </SafeAreaView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  top:{
    marginTop:Platform.OS === 'ios'?0:0
  }
})