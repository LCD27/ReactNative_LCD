import React,{Component} from 'react'
import Button from "../common/Button";

import {
    Text,
    View,
    Animated,
} from "react-native"
/**
 * 针对Animated的练习
 * https://www.jianshu.com/p/7fd37d8ed138
 * https://blog.csdn.net/teagreen_red/article/details/79617606
 * https://reactnative.cn/docs/animations/  react-native 中文网
 *
 * */

/**
 *
 * 改变透明度
 *
 * */

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
  }

  componentDidMount() {
    Animated.timing(                  // 随时间变化而执行动画
        this.state.fadeAnim,            // 动画中的变量值
        {
          toValue: 1,                   // 透明度最终变为1，即完全不透明
          duration: 10000,              // 让动画持续一段时间
        }
    ).start();                        // 开始执行动画
  }

  render() {
    let { fadeAnim } = this.state;

    return (
        <Animated.View                 // 使用专门的可动画化的View组件
            style={{
              ...this.props.style,
              opacity: fadeAnim,         // *********************** 将透明度指定为动画变量值 *********
            }}
        >
          {this.props.children}
        </Animated.View>
    );
  }
}

export default class LCDAnimated extends Component{

  state = {
    animatedValue: new Animated.Value(0),
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
    }).start(()=>this._onClick())

    // let animated = this.state.animatedValue
    // animated.setValue(0)
    // Animated.spring(animated, {
    //   toValue: 1,
    //   friction: 2,    //弹跳系数
    //   tension: 10,   // 控制速度
    // }).start()

  }

  render(){
    /**
     * interpolate 插值，比如起始值为0~1
     *         输入值为（inputRange）：[0, 1]
     *         输出值为（outRange）:['0deg', '360deg']
     *         当作用到rotateZ时，代表该view旋转360°
     * */
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
    return <View style={{flex:1,}}>
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
                  outputRange: [10, 150]
                })}, // x轴移动
            ]
          }}
      />

    </View>
  }
}