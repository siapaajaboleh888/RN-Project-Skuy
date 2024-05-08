import React from 'react';
import { Image } from 'react-native';
import Beranda from './screens/Beranda';
import About from './screens/About';
import Kontak from './screens/Kontak';
import HouseList from './screens/HouseList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./asset/Beranda.png')} style={{width:25,height:25}} />
          ),
        }} />
      <Tab.Screen name="Kontak" component={Kontak} options={{
       tabBarLabel: 'Kontak',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./asset/Kontak.png')} style={{width:25,height:25}} />
          ),
        }}/>
      <Tab.Screen name="About" component={About} options={{
       tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./asset/about.png')} style={{width:25,height:25}} />
          ),
        }}/>
      <Tab.Screen name='HouseList' component={HouseList} options={{
      tabBarLabel: 'Houslist',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./asset/houslist.png')} style={{width:25,height:25}} />
          ),
        }} />
    </Tab.Navigator>
  );
}

      
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>

  );
}

export default App;