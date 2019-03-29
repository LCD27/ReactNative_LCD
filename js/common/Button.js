import React,{Component} from 'react'
import {
  TouchableOpacity,
    Text,
} from 'react-native'




// function getButton(props){
//   return <TouchableOpacity style={{
//     width:'100%',
//     height:60,
//     backgroundColor:'#ccc',
//     justifyContent:'center',
//     alignItems:'center'
//   }}
//   onPress = {props.onClick}
//   >
//     <Text style={{color:'red'}}>{props.name}</Text>
//   </TouchableOpacity>
// }




export default class Button extends Component{

  props:{
    style?:Object,
    textStyle?:Object,
    textName:string,
    onClick:()=>{},
  }

  render(){
    return <TouchableOpacity style={[{
      width:'100%',
      height:50,
      backgroundColor:'#ccc',
      justifyContent:'center',
      alignItems:'center'
    },this.props.style]}
    onPress = {this.props.onClick}
    >
      <Text style={[{color:'red'},this.props.textStyle]}>{this.props.textName}</Text>
    </TouchableOpacity>
  }
}