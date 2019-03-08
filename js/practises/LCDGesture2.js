import React,{Component} from 'react'
import{
    View,
    PanResponder
} from 'react-native'


export default class LCDGesture2 extends Component{

  constructor(props){
    super(props)
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:(event,gesture)=>true,
      onPanResponderReject:(event,gesture)=>{
        console.warn('Reject')
      },
      onPanResponderGrant:(event,gesture)=>{
        console.warn('Grant')
      },
      onPanResponderStart:(event,gesture)=>{
        console.warn('Start')
      },
      onPanResponderMove:(event,gesture)=>{
        console.warn('Move')
      },
      onPanResponderEnd:(event,gesture)=>{
        console.warn('End')
      },
      onPanResponderRelease:(event,gesture)=>{
        console.warn('Release')
      },
    })
  }


  render(){
    return <View style={{flex:1,backgroundColor:'blue'}}
                 {...this._panResponder.panHandlers}
    />
  }
}