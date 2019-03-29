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
import{
  connect
} from 'react-redux'

import {
  testAction
} from '../actions/testAction'
import NavigationUtil from "../navigators/NavigationUtil";
/**
 * 最热页面
 */
class PopularPage extends Component{

  _onClick = ()=>{
    // this.props.navigation.navigate('MaterialTopTabNavigator')
    this.props.changTest('PopularPage+++++')
  }
  // componentWillReceiveProps(){
  //   console.warn('componentWillReceiveProps')
  // }

  // componentDidMount(){
  //   console.warn('componentDidMount')
  // }
  // componentWillUpdate(){
  //   console.warn('componentWillUpdate')
  // }
  // componentDidUpdate(){
  //   console.warn('componentDidUpdate')
  // }

  render(){

    console.warn(this.props)
    if(!NavigationUtil.navigation){
      NavigationUtil.navigation=this.props.navigation
    }
    return <AppContainer style={styles.container}>
      <Button textName={this.props.test} onClick = {this._onClick}/>
      {/*<Text>{this.props.test}</Text>*/}
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

const mapStateToProps = state => ({
  test:state.test2
})

const mapDispatchToProps = dispatch =>({
  changTest: test => dispatch(testAction(test))
})


export default connect(mapStateToProps,mapDispatchToProps)(PopularPage)