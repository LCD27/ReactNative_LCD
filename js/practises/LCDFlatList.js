import React from 'react'
import{
  FlatList,
    View,
    Text,
} from 'react-native'
import NavigationUtil from '../navigators/NavigationUtil';

// import * as Data from '../my_data'

const data=[
  {
    ttile:'MaterialTopTabNavigator',
    callBack:(index,props)=>{
      // console.warn(index+'  '+JSON.stringify(props))
      NavigationUtil.navigate('MaterialTopTabNavigator')
      // props && props.naviagtion && props.navigation.navigate('HomePage')
    }
  },
  
]
export default class LCDFlatList extends React.Component{
  // state={
  //   data:data
  // }
  constructor(props){
    super(props)
    this.state={
      data:data
    }
  }

  _keyExtractor=(item,index)=>{
    return 'id-'+index
}
  _onItemPress = index=>{
    console.warn('index:'+index)


  }
  _renderItem=info=>{
    if(info){
      return <View style={{width:'100%',height:50,backgroundColor:'#c0c0c0'}}>
        <Text style={{width:'100%',lineHeight:50,textAlign:'center'}} onPress={()=>{info.item.callBack(info.index,this.props)}}>{info.item.ttile}</Text>
      </View>
    }
    return null
  }

  render(){
    return <FlatList
        renderItem={this._renderItem}
        data={this.state.data}
        ItemSeparatorComponent={()=>(<View style={{width:'100%',height:2,backgroundColor: 'red'}}/>)}
        keyExtractor={this._keyExtractor}
        // numColumns={}
        // getItem={}
        // getItemCount={}
        // disableVirtualization={}
        // maxToRenderPerBatch={}
        // updateCellsBatchingPeriod={}
        // windowSize={}
    />
  }
}