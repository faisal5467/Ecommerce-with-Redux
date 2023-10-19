import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Component/Header'
import Product from './Component/Product'

const App = () => {
  const products =[
    {
    name: "Samsung",
    color: "black",
    price: 20000,
    image: 'https://cubeonline.pk/cdn/shop/products/FLRC-214-B0-Burgundy-01-PDP-GALLERY-1600x1200_800x.jpg?v=1696490551'
  },
  {
    name: "Apple ",
    color: "red",
    price: 50000,
    image: 'https://images.priceoye.pk/apple-iphone-14-pro-max-pakistan-priceoye-4hr9p.jpg'
  },  {
    name: "Vivo",
    color: "gray",
    price: 70000,
    image: 'https://g-mart.pk/wp-content/uploads/vivo_Y100-438x593.jpg'
  },
]
  return ( 
    <View style={styles.container}>
      <Header/>
      <ScrollView>
     
      {
        products.map((item, index)=><Product key={index} item={item}/>)
       
      }
      </ScrollView>
   {/* <Product/> */}
     
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})