import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
    Animated,
  Easing,
    Platform,
  ScrollView
} from 'react-native'
import {
  AppContainer,
    Button
} from '../common'

class FadeInView extends Component{
  constructor(props){
    super(props)
    this.state={
      fadeAnim:new Animated.Value(0),
    }
  }

  componentDidMount(){
    Animated.timing(this.state.fadeAnim,{toValue:1,duration: 2000,}).start()
  }

  render(){
    return <Animated.View style={{...this.props.style}}>
      {this.props.children}
    </Animated.View>
  }
}


export default class MyPage extends Component{
  constructor(props){
    super(props)
    this.state={
      animatedValue:new Animated.Value(0),
      // translateValue: new Animated.ValueXY({x:0, y:0}), // 二维坐标
      translateValue: new Animated.Value(0),
    }
  }
  _onClick = ()=>{
    // let animated = this.state.fadeAnim
    // animated.setValue(0)
    // Animated.timing(animated,{
    //   duration: 1000,
    //   toValue: 0.5,
    //   easing: Easing.linear
    // }).start()

    // this.state.translateValue.setValue({x:0, y:0});
    // Animated.decay( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
    //     this.state.translateValue,
    //     {
    //       velocity: 7, // 起始速度，必填参数。
    //       deceleration: 0.1, // 速度衰减比例，默认为0.997。
    //     }
    // ).start();

    // Animated.spring(this.state.translateValue, {
    //   toValue: 1,
    //   velocity: 7,
    //   tension: -20,
    //   friction: 3,
    // }).start();

    let animated = this.state.animatedValue
    animated.setValue(0)
    Animated.timing(animated,{
      toValue: 1,
      duration:3000,
      // easing:Easing.exp(300),
    }).start()

    // let animated = this.state.animatedValue
    // animated.setValue(0)
    // Animated.spring(animated, {
    //   toValue: 1,
    //   friction: 2,    //弹跳系数
    //   tension: 10,   // 控制速度
    // }).start()

  }


  render(){
    const rotateZ = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5,],
      outputRange: ['0deg', '180deg', ]
    });

    const textSize = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [50, 32, 18]
    });

    const marginLeft = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 200]
    });
    // console.warn(this.props.navigation)
    const MyButton = Button.getButton;
    return <AppContainer style={styles.container}>
      <MyButton name={'animated'} onClick = {this._onClick}/>
      <Animated.View style={{
        marginTop: 10,
        width: 100,
        height: 100,
        justifyContent:"center",
        alignSelf:"center",
        transform: [
      {rotateZ:rotateZ},
        ]
      }}>
        <Text style={[{textAlign: 'center'}]}>Hello World!</Text>
      </Animated.View>
      <Animated.Text
          style={{
            marginTop: 10,
            width:100,
            fontSize: 18,
            color: 'white',
            backgroundColor:'red',
            transform: [
              {rotateX:rotateX},
            ]
          }}
      >
        窗外风好大，我没有穿褂。
      </Animated.Text>
      <Animated.Text
          style={{
            marginTop: 10,
            height: 100,
            lineHeight: 100,
            fontSize: textSize,
            color: 'red'
          }}
      >
        IAMCJ嘿嘿嘿
      </Animated.Text>
      <Animated.View
          style={{
            marginTop: 10,
            width: 100,
            height: 40,
            // marginLeft:marginLeft,
            backgroundColor:'red',
            transform:[
              {translateX: this.state.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150]
                })}, // x轴移动
            ]
          }}
      />

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
