import React from 'react'
import{
  FlatList,
    View,
    Text,
} from 'react-native'
const data=[{a:"132"},{a:"132"},{a:"132"},{a:"132"},{a:"132"},{a:"132"}]
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

  _renderItem=info=>{
    if(info){
      return <View style={{width:'100%',height:50,backgroundColor:'#c0c0c0'}}>
        <Text>{info.item.a}</Text>
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