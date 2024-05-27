// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Beranda from './screens/Beranda';
import PasarModalScreen from './screens/PasarModalScreen';
import KunjunganScreen from './screens/KunjunganScreen';
import AkunScreen from './screens/AkunScreen';

const Tab = createBottomTabNavigator();

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
          tabBarStyle: { display: 'flex' }, // Fix: remove the array and null value
        })}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Pasar Modal" component={PasarModalScreen} />
        <Tab.Screen name="Kunjungan" component={KunjunganScreen} />
        <Tab.Screen name="Akun" component={AkunScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;