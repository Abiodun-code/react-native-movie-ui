import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import { RootStack } from '../types/stackParams';
import MovieScreen from '../screen/MovieScreen';
import PersonScreen from '../screen/PersonScreen';
import SearchScreen from '../screen/SearchScreen';

const Stack = createNativeStackNavigator<RootStack>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Movie" component={MovieScreen}/>
        <Stack.Screen name="Person" component={PersonScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
export default Navigation;