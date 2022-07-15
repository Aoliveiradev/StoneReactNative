import React from 'react';
import Home from './src/pages/Home';
import Cart from './src/pages/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Cart" component={Cart} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
