import React from 'react';
import { Text, Pressable } from 'react-native';

const Tombol = ({ title, onPress }) => {
  return (
    <Pressable style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "grey", padding: 15, borderRadius: 10, marginTop: 10 }} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Tombol;