export default class NavigationUtil{
  static navigate(page,params){
    const navigation = NavigationUtil.navigation
    navigation.navigate(page,{...params})
  }
}