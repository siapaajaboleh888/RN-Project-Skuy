import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'

const Card = ({houses}) => {
  return (
    <Pressable style={{width: "auto", padding: 10, borderRadius: 10, backgroundColor: "grey", marginVertical: 10}}>
        <Image source={{uri: houses.image}} />
        <View>
            <Text>{houses.name}</Text>
            <Text>{houses.location}</Text>
        </View>
        <Text>{houses.price}</Text>
    </Pressable>
  )
}

export default Card
