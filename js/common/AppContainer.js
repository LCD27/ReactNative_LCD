import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Platform,
} from 'react-native'
export default class AppContainer extends Component{
  props:{
      style?:Object,
  }


  render(){
    // console.warn(this.props.style)
    return <View style={styles.container}>
      <View style={styles.top}/>
      <View style={this.props.style === undefined ? styles.container : this.props.style}>
        {this.props.children}
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  top:{
    marginTop:Platform.OS === 'ios'?20:0
  }
})