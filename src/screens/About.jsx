import React from 'react';
import { View, Text } from 'react-native';
import Tombol from '../components/Tombol';

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Aplikasi ini dibuat untuk memudahkan pencarian Penginapan.</Text>
      <Tombol title="Kembali ke halaman utama" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default About;