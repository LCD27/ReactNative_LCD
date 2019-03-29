import React,{Component} from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,

} from 'react-navigation'
import{
  Dimensions,
  View
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons' // https://oblador.github.io/react-native-vector-icons/
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    TrendingPage,
    MyPage,
    FavoritePage,
    PopularPage,
    HomePage,
    WelcomePage,
    PractisePage,
} from '../pages'
import {
  BottomTabData,
  MaterialTopTabData,
  DrawerData,
  StackData,
}from '../my_data'


const MaterialTopTabNavigator = createMaterialTopTabNavigator({...MaterialTopTabData},{
  initialRouteName:'FavoritePage',
  swipeEnabled:true,
  animationEnabled:true,
  lazy:true,
  defaultNavigationOptions:{
    // header:(<View style={{backgroundColor:'red',height:30,width:100}}></View>),
    tabBarOptions:{
      style:{backgroundColor:'red',paddingTop:30}
    }
  }
  // tabBarPosition:'bottom'
})

const BottomTabNavigator = createBottomTabNavigator({...BottomTabData},{
  // initialRouteName:'PractisePage'
})


const DrawerNavigator = createDrawerNavigator({...DrawerData},{
  drawerWidth:Dimensions.get('window').width*0.8,
  drawerPosition:'left',
  drawerBackgroundColor:'blue',
  useNativeAnimations:true,
})

const StackNavigator = createStackNavigator({
    ...StackData,
  BottomTabNavigator:{
    screen:BottomTabNavigator,
  },
  MaterialTopTabNavigator:{
    screen:MaterialTopTabNavigator,
  },
  DrawerNavigator:{
    screen:DrawerNavigator,
  },
},{
  initialRouteName:'BottomTabNavigator',
  defaultNavigationOptions:{
    header:null,
  }
})

const SwitchNavigator = createSwitchNavigator({
  WelcomePage:WelcomePage,
  Main:StackNavigator,
},{
  defaultNavigationOptions: {
    header: null,
  }
})

const AppNavigators = createAppContainer(SwitchNavigator)

export default AppNavigators