import React from 'react';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import HouseList from './screens/HouseList';
import Tombol from './components/Tombol';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="HouseList" component={HouseList} />
        <Stack.Screen name="Tombol" component={Tombol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;