import React from 'react';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import HouseList from './screens/HouseList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='HouseList' component={HouseList} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;