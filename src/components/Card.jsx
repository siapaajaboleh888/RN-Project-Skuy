import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

  
const Card =  ({houses}) => {
  return (
    <Pressable style={{width: "auto", padding: 10, borderRadius: 10, backgroundColor: "grey", marginVertical: 10}}>
        <View>
            <Text>{houses.name}</Text>
            <Text>{houses.location}</Text>
            <Text>{houses.price}</Text>
        </View>
        <TouchableOpacity>
        <Image source={{uri: houses.image}}
       style={{width: 400, height: 400}} />
        </TouchableOpacity>
    </Pressable>
  )
}

export default Card
