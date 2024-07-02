// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Beranda from './screens/Beranda';
import PasarModalScreen from './screens/PasarModalScreen';
import KunjunganScreen from './screens/KunjunganScreen';
import AkunScreen from './screens/AkunScreen';

// Import screen-screen individu dari Beranda
import KasScreen from './components/KasScreen';
import PasarScreen from './components/PasarScreen';
import KesehatanScreen from './components/KesehatanScreen';
import PenjualanScreen from './components/PenjualanScreen';
import KandangScreen from './components/KandangScreen';
import PembayaranScreen from './components/PembayaranScreen';

// Import screen-screen individu dari Akun
import Investor from './components/Investor';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';
import FAQScreen from './components/FAQScreen';
import TentangScreen from './components/TentangScreen';
import Keluar from './components/Keluar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BerandaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BerandaMain" component={Beranda} options={{ headerShown: false }} />
      <Stack.Screen name="Investor" component={Investor} />
      <Stack.Screen name="Kas" component={KasScreen} />
      <Stack.Screen name="Pasar" component={PasarScreen} />
      <Stack.Screen name="Kesehatan" component={KesehatanScreen} />
      <Stack.Screen name="Penjualan" component={PenjualanScreen} />
      <Stack.Screen name="Kandang" component={KandangScreen} />
      <Stack.Screen name="Pembayaran" component={PembayaranScreen} />
    </Stack.Navigator>
  );
};

const AkunStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AkunMain" component={AkunScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profil" component={ProfileScreen} />
      <Stack.Screen name="Pengaturan" component={SettingsScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="TentangAplikasi" component={TentangScreen} />
      <Stack.Screen name="Keluar" component={Keluar} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Beranda') {
              iconName = 'home';
            } else if (route.name === 'Pasar Modal') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Kunjungan') {
              iconName = 'calendar';
            } else if (route.name === 'Akun') {
              iconName = 'user';
            }
            return <FontAwesome name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="Beranda" component={BerandaStack} options={{ headerShown: false }} />
        <Tab.Screen name="Pasar Modal" component={PasarModalScreen} />
        <Tab.Screen name="Kunjungan" component={KunjunganScreen} />
        <Tab.Screen name="Akun" component={AkunStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;