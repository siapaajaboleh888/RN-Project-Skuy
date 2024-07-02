import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Beranda from './screens/Beranda';
import KasScreen from './screens/KasScreen'; // Tambahkan screen lain sesuai kebutuhan
import PasarScreen from './screens/PasarScreen';
import KesehatanScreen from '../components/KesehatanScreen';
import PembayaranScreen from '../components/PembayaranScreen';
import PenjualanScreen from '../components/PenjualanScreen';
import Investor from '../components/Investor';
// ... dan seterusnya

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="Kas" component={KasScreen} />
        <Stack.Screen name="Pasar" component={PasarScreen} />
        <Stack.Screen name="Kesehatan" component={KesehatanScreen} />
        <Stack.Screen name="Pembayaran" component={PembayaranScreen} />
        <Stack.Screen name="Penjualan" component={PenjualanScreen} />
        <Stack.Screen name="Investor" component={Investor} />
        {/* Tambahkan screen lain sesuai kebutuhan */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;