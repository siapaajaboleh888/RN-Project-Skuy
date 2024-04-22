import React from 'react';
import { View, Text } from 'react-native';
import Tombol from '../components/Tombol';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Selamat datang di aplikasi penginapan!</Text>
      <Tombol title="Lihat daftar apartemen" onPress={() => navigation.navigate("HouseList")} />
    </View>
  );
};

export default Home;