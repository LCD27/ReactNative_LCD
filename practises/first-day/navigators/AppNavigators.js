import React,{Component} from 'react'
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import {
  TrendingPage,
  MyPage,
  FavoritePage,
  PopularPage,
} from '../pages'

const imageSize = 26

const BottomTabNavigator = createBottomTabNavigator({
  PopularPage:{
    screen:PopularPage,
    navigationOptions:{
      tabBarLabel:'最热',
      tabBarIcon:({focused,horizontal,tintColor})=>{
        return <MaterialIcons
          name={'whatshot'}
          size = {imageSize}
          style={{color:tintColor}}
        />
      }
    }
  },
  TrendingPage:{
    screen:TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
              name={'md-trending-up'}
              size={imageSize}
              style={{color: tintColor}}
          />
      ),
    }
  },
  FavoritePage:{
    screen:FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
          <MaterialIcons
              name={'favorite'}
              size={imageSize}
              style={{color: tintColor}}
          />
      ),
    }
  },
  MyPage:{
    screen:MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
          <Entypo
              name={'user'}
              size={imageSize}
              style={{color: tintColor}}
          />
      ),
    }
  }
})

const AppNavigators = createAppContainer(BottomTabNavigator)

export default AppNavigators