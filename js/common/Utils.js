import React from 'react'
import{
    Dimensions,
    PixelRatio
} from 'react-native'

let curDevicePixelRatio = PixelRatio.get();

let screenwidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

export default{
    curDevicePixelRatio,
    screenwidth,
    screenHeight,
    
}