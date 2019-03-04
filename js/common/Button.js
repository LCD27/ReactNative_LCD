import React,{Component} from 'react'
import {
  TouchableOpacity,
    Text,
} from 'react-native'

function getButton(props){
  return <TouchableOpacity style={{
    width:'100%',
    height:60,
    backgroundColor:'#ccc',
    justifyContent:'center',
    alignItems:'center'
  }}
  onPress = {props.onClick}
  >
    <Text style={{color:'red'}}>{props.name}</Text>
  </TouchableOpacity>
}
export default {
  getButton,
}

