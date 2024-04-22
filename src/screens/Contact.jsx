import React from 'react';
import { View, Text } from 'react-native';
import Tombol from '../components/Tombol';

const Contact = ({ navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Hubungi kami di email@example.com atau via telepon (123) 456-7890.</Text>
      <Tombol title="Kembali ke halaman utama" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Contact;