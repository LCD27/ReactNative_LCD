import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  TrendingPage,
  MyPage,
  FavoritePage,
  PopularPage,
  HomePage,
  WelcomePage,
  PractisePage,
} from '../pages'
import {createMaterialTopTabNavigator} from "react-navigation";
const imageSize = 26
export const BottomTabData={
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
  PractisePage:{
    screen:PractisePage,
    navigationOptions: {
      tabBarLabel: '练习',
      tabBarIcon: ({tintColor, focused}) => (
          <AntDesign
              name={'form'}
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
}

export const MaterialTopTabData={
  HomePage:{
    screen:HomePage,
  },
  TrendingPage:{
    screen:TrendingPage,
  },
  FavoritePage:{
    screen:FavoritePage,
  },
}
export const DrawerData={
  HomePage:{
    screen:HomePage,
  },
  TrendingPage:{
    screen:TrendingPage,
  },
  FavoritePage:{
    screen:FavoritePage,
  },
}
export const StackData={
  HomePage:{
    screen:HomePage,
  },
  TrendingPage:{
    screen:TrendingPage,
  },
  FavoritePage:{
    screen:FavoritePage,
  },

  // PractisePage:{
  //   screen:PractisePage,
  // }

}