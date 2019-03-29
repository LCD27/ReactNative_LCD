import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import {
  AppContainer,
    Button
} from '../common'
/**
 * 趋势页面
 */
export default class TrendingPage extends Component{

  _onClick = ()=>{
    this.props.navigation && this.props.navigation.navigate('DrawerNavigator')
  }

  render(){
    // console.warn(this.props.navigation)
    const MyButton = Button.getButton
    return <AppContainer style={styles.container}>
      <Button textName={'DrawNavigation'} onClick = {this._onClick}/>
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
