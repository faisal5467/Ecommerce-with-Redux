import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
       <Text style={{fontSize:30, textAlign:'right', padding:10, backgroundColor:'orange', color:'black'}}>0</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})