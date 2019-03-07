//AnimatedScrollDemo.js
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  Animated,
  Easing,
  ScrollView
} from 'react-native';

let deviceHeight = require('Dimensions').get('window').height *0.5;
let deviceWidth = require('Dimensions').get('window').width;
export default class LCDAnimatedScrollDemo extends React.Component {
  state: {
    xOffset: Animated,
  };
  constructor(props) {
    super(props);
    this.state = {
      xOffset: new Animated.Value(1.0)
    };
  }
  render() {
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true} //水平滑动
                      showsHorizontalScrollIndicator={false}
                      style={{width:deviceWidth,height:deviceHeight}}//设置大小
                      onScroll={Animated.event(
                          [{nativeEvent: {contentOffset: {x: this.state.xOffset}}}]//把contentOffset.x绑定给this.state.xOffset
                      )}
                      scrollEventThrottle={100}//onScroll回调间隔
          >
            <Animated.View
                            style={{height:deviceHeight,
                              width:deviceWidth,
                              opacity:this.state.xOffset.interpolate({//映射到0.0,1.0之间
                                inputRange: [1,deviceWidth*0.6],
                                outputRange: [1.0, 0.5]
                              }),
                              backgroundColor:'red'
                            }}

            />
            <View style={{height:deviceHeight, width:deviceWidth, backgroundColor:'blue'}} />

          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    flex: 1,
  },
});
