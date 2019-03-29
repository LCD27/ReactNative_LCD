import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  ScrollView,
} from 'react-native'
import {
  AppContainer,
  Button,
  Utils
} from '../common'


import{
  LCDAnimated,
  LCDAnimatedScrollDemo,
  LCDAnimatedGesture,
  LCDFlatList,
  LCDGesture,
  LCDGesture2,
  LCDGesture3,
  LCDNativeView,

  MarqueeText,

} from '../practises'

/**
 * 练习页面
 */

export default class PractisePage extends Component{
  constructor(props){
    super(props)
  }
  _onClick=()=>{

  }

  render(){


    return <AppContainer style={styles.container}>
         {/* <MarqueeText style={{height:30,width: '40%',backgroundColor:'red'}}  text={'sdfgjkqweroit92vajcieuyrpqt92384718dshfjkha'}/> */}
         <MarqueeText
                    textList = {[
                        {label : '1',value : 'item1:一闪一闪亮晶晶，满天都是小星星'},
                        {label : '2',value : 'item2:两只老虎跑的快'},
                        {label : '3',value : 'item3:蓝蓝的天上白云飘，白云下面小肥羊儿跑'},
                    ]}
                    speed = {20}
                    width = {Utils.screenwidth}
                    height = {50}
                    direction = {'left'}
                    reverse = {false}
                    bgContainerStyle = {{backgroundColor : '#FFFF00'}}
                    textStyle = {{fontSize : 16,color : '#FF0000'}}
                    onTextClick = {(item) => {
                        alert(''+JSON.stringify(item));
                    }}
                />
     {/*<LCDAnimated/>*/}
     {/*<LCDAnimatedScrollDemo/>*/}
     {/*<LCDAnimatedGesture/>*/}
     <LCDFlatList/>
     {/*<LCDGesture/>*/}
     {/*<LCDGesture2/>*/}

     {/*<LCDGesture3/>*/}
     {/* <LCDNativeView style={{flex:1,backgroundColor:'#dff'}}/> */}
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    backgroundColor: 'rgba(200, 230, 255, 0.8)',
    marginBottom:10,
    justifyContent:"center",
    alignSelf:"center",
  },
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
      width:100,
      height:30,
    },
    justifyContent:"center",
    alignSelf:"center",
  }),
  buttonText: {
    alignSelf:"center",
  }
})
