import React from 'react';
import { View, Text } from 'react-native';

const Tombol = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('About');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the home screen!</Text>
      <Tombol title="Go to About" onPress={handlePress} />
    </View>
  );
};

export default Tombol;