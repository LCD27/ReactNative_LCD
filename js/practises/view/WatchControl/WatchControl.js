/**
 * 计时器view的练习
 */

 import React,{Component} from 'react'
import{
    View,
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { hidden } from 'ansi-colors';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        overflow:hidden,
    }
})


 export default class WatchControl extends Component{

    props:{
        style?:Object,
    }


    render(){
        return <View style={[styles.container,{...this.props.style}]} >
            <Text>dfhkahfkhaksdfhksfkdhakfhka</Text>
        </View>
    }

 }

 