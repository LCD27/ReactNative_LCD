import React,{Component} from 'react'
import{
  PanResponder,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  Animated,
  Easing,
} from 'react-native'

export default class LCDAnimatedGesture extends Component{
  state:{
    trans:Animated.ValueXY
  }
  _panResponder : PanResponder;
  constructor(props){
    super(props)
    this.state={
      trans:new Animated.ValueXY()
    }
    this._panResponder=PanResponder.create({
      onStartShouldSetPanResponder:()=>true,
      onMoveShouldSetPanResponder:()=>true,
      // onStartShouldSetPanResponderCapture:()=>true,
      // onMoveShouldSetPanResponderCapture:()=>true,
      onPanResponderGrant:(event,gestureState)=>{
        console.warn('grant')
      },
      onPanResponderReject:(event,gestureState)=>{
        console.warn('reject')
      },
      onPanResponderRelease: ()=>{//手松开，回到原始位置
        // Animated.spring(this.state.trans,{toValue: {x: this.state.trans.x, y: this.state.trans.y}}
        // ).start();
      },
      onPanResponderTerminate:()=>{//手势中断，回到原始位置
        Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
        ).start();
      },
      onPanResponderMove: Animated.event(
          [null, {dx: this.state.trans.x, dy:this.state.trans.y}] // 绑定动画值
      ),
    })

    // this._panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: () => true, //响应手势
    //   onPanResponderMove: Animated.event(
    //       [null, {dx: this.state.trans.x, dy:this.state.trans.y}] // 绑定动画值
    //   ),
    //   onPanResponderRelease: ()=>{//手松开，回到原始位置
    //     Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
    //     ).start();
    //   },
    //   onPanResponderTerminate:()=>{//手势中断，回到原始位置
    //     Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
    //     ).start();
    //   },
    // });

  }
  render() {
    return (
        <View style={styles.container}>
          <Animated.View style={{width:80,
            height:80,
            borderRadius:40,
            backgroundColor:'blue',
            transform:[
              {translateY:this.state.trans.y},
              {translateX:this.state.trans.x},
            ],
          }}
                         {...this._panResponder.panHandlers}
          >
          </Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
