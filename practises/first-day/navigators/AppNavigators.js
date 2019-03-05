import React,{Component} from 'react'
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createMaterialTopTabNavigator,
} from 'react-navigation'
import{
  Dimensions
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import {
  TrendingPage,
  MyPage,
  FavoritePage,
  PopularPage,
    HomePage,
} from '../pages'

const imageSize = 26

const MaterialTopTabNavigator = createMaterialTopTabNavigator({
  HomePage:{
    screen:HomePage,
  },
  TrendingPage:{
    screen:TrendingPage,
  },
  FavoritePage:{
    screen:FavoritePage,
  },
},{
  initialRouteName:'HomePage',
  swipeEnabled:true,
  animationEnabled:true,
  lazy:true,
  // tabBarPosition:'bottom'
})

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
  },
  // MaterialTopTabNavigator:{
  //   screen:MaterialTopTabNavigator,
  //   navigationOptions: {
  //     tabBarLabel: 'Top',
  //     tabBarIcon: ({tintColor, focused}) => (
  //         <Entypo
  //             name={'user'}
  //             size={imageSize}
  //             style={{color: tintColor}}
  //         />
  //     ),
  //   }
  // }
})


const DrawerNavigator = createDrawerNavigator({
  HomePage:{
    screen:HomePage,
  },
  TrendingPage:{
    screen:TrendingPage,
  },
  FavoritePage:{
    screen:FavoritePage,
  },
},{
  drawerWidth:Dimensions.get('window').width*0.8,
  drawerPosition:'left',
  drawerBackgroundColor:'blue',
  useNativeAnimations:true,
})

const StackNavigator = createStackNavigator({
  HomePage:{
    screen:HomePage,
  },
  TrendingPage:{
    screen:TrendingPage,
  },
  FavoritePage:{
    screen:FavoritePage,
  },
  BottomTabNavigator:{
    screen:BottomTabNavigator,
  },
  MaterialTopTabNavigator:{
    screen:MaterialTopTabNavigator
  },
  DrawerNavigator:{
    screen:DrawerNavigator
  }

},{
  initialRouteName:'BottomTabNavigator',
  defaultNavigationOptions:{
    header:null,
  }
})


const AppNavigators = createAppContainer(StackNavigator)

export default AppNavigators