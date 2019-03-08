import React,{Component} from 'react'
import{
    View,
    PanResponder,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import Toast from 'react-native-root-toast'
import LCDFlatList from "./LCDFlatList";
import PointerEventsView from "./Gesture/PointerEventsView";

// 搜索字母，长度: 28
const WORDS = ['↑', '✩' ,'A','B','C','D','E'];
const {width,height}=Dimensions.get('window')


/**
 * setNativeProps
 * https://reactnative.cn/docs/direct-manipulation/
 * */

class LCDItem extends Component{

  props:{
    style?:Object,
  }
  setNativeProps(props){
    this._itemRef && this._itemRef.setNativeProps(props)
  }
  constructor(props){
    super(props)
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:(event,gesture)=>true,
      onMoveShouldSetPanResponder:(event,gesture)=>true,
      onStartShouldSetPanResponderCapture:(event,gesture)=>true,
      onPanResponderReject:(event,gesture)=>{
        console.warn('Reject')
      },
      onPanResponderGrant:(event,gesture)=>{
        console.warn('Grant')
        this._itemRef && this._itemRef.setNativeProps({backgroundColor:'#20b2cc'})
      },
      onPanResponderStart:(event,gesture)=>{
        // console.warn('Start')
      },
      onPanResponderMove:(event,gesture)=>{
        // console.warn(this.props.text)
      },
      onPanResponderEnd:(event,gesture)=>{
        console.warn('End')
      },
      onPanResponderRelease:(event,gesture)=>{
        console.warn('Release')
      },
      onResponderTerminationRequest:(event,gesture)=>{
        console.warn('TerminationRequest')
        return true
      },
    })
  }

  _onItemPress = ()=>{
    console.warn('aaa')
    this._itemRef && this._itemRef.setNativeProps({backgroundColor:'#20b'})
  }

  render(){
    // console.warn(this.props.text)
    return <TouchableOpacity style={[{width:'100%',},{...this.props.style}]}>
      <View ref = {ref => this._itemRef = ref}
            style={[{width:'100%',height:this.props.style.height-3,backgroundColor:'#cfa',justifyContent:'center'},]} >
        <Text style={{flex:1,textAlign: 'center'}} ref = {ref => this._itemRef = ref} onPress={this._onItemPress}>{this.props.text}</Text>
      </View>
      <View style={{width:'100%',height:3,backgroundColor:'#aaf'}}/>
    </TouchableOpacity>
  }
}


export default class LCDGesture3 extends Component{

  constructor(props){
    super(props)
    this._dataCount = WORDS.length;
    console.warn(this._dataCount)
    this._previousIndex = -1
    this._previousLocationY = -1
    this._itemRef=[]
    this._panResponder = PanResponder.create({
      // onStartShouldSetPanResponder:(event,gesture)=>true,
      onMoveShouldSetPanResponder:(event,gesture)=>true,
      // onStartShouldSetPanResponderCapture:(event,gesture)=>true,
      onPanResponderReject:(event,gesture)=>{
        console.warn('Reject')
      },
      onPanResponderGrant:(event,gesture)=>{
        // console.warn('Grant')
      },
      onPanResponderStart:(event,gesture)=>{
        // console.warn('Start')
        this._previousLocationY = event.nativeEvent.locationY
      },
      onPanResponderMove:(event,gesture)=>{
        let locationY = event.nativeEvent.locationY
        let isMoveUp = locationY - this._previousLocationY > 0
        this._previousLocationY = locationY
        let pageX = event.nativeEvent.pageX
        let moveX = gesture.moveX
        let moveY = gesture.moveY-this.y
        let index = Math.floor(moveY/this.itemHeight)
        // console.warn('Move:'+moveY+' itemheight:'+this.itemHeight+' index:'+index)
        if(index !== this._previousIndex){
          this._previousIndex=index
          let bgColor = '#20b2cc'
          if(isMoveUp){
            bgColor = '#2fc'
          }
          this._itemRef[index]&& this._itemRef[index].setNativeProps({backgroundColor:bgColor})
          Toast.show(index)
        }


      },
      onPanResponderEnd:(event,gesture)=>{
        // console.warn('End')
      },
      onPanResponderRelease:(event,gesture)=>{
        // console.warn('Release')
      },
      onResponderTerminationRequest:(event,gesture)=>{
        console.warn('TerminationRequest')
        return true
      },
    })
  }

  _onItemPress = ()=>{
    console.warn('aaa')
  }

  _onLayout=event=>{
   this.width = event && event.nativeEvent && event.nativeEvent.layout.width
   this.height = event && event.nativeEvent && event.nativeEvent.layout.height
   this.x = event && event.nativeEvent && event.nativeEvent.layout.x
   this.y = event && event.nativeEvent && event.nativeEvent.layout.y
    console.warn(this.y+'******')
  }

  _renderItem = (data)=>{
    this.itemHeight = 300/this._dataCount

    return data.map(item => {
      return <LCDItem ref = {ref => this._itemRef.push(ref)} style={{width:'100%',height:this.itemHeight}} key = {item}  text = {item}/>
    })
  }


  render(){
    return <View style={{flex:1,height:300,backgroundColor:'#c9c9c9'}}
                 {...this._panResponder.panHandlers}
                 onLayout={this._onLayout}
    >
      {/*<LCDFlatList/>*/}
      {this._renderItem(WORDS)}
      {/*<PointerEventsView/>*/}
    </View>
  }
}