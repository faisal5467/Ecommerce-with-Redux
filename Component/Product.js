import { StyleSheet, Text, View, Image , Button} from 'react-native'
import React from 'react'

const Product = (props) => {
  const item=props.item
    
  return (
    <View style={{alignItems:'center', borderBottomColor:'gray', borderBottomWidth:2, padding:10}}>  
          <Text style={{ fontSize: 24, color:'red' }}>{item.name}</Text>
          <Text style={{ fontSize: 24 }}>{item.price}</Text>
          <Text style={{ fontSize: 24 }}>{item.color}</Text>
          <Image style={{height: 100,  width: 100}} source={{uri: item.image}}/>
          <Button title='Add to Cart'/>
     </View>
  )
}

export default Product

const styles = StyleSheet.create({})