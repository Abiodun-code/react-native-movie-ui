import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import { RootStack } from '../types/stackParams';
import MovieScreen from '../screen/MovieScreen';
import PersonScreen from '../screen/PersonScreen';

const Stack = createNativeStackNavigator<RootStack>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Movie" component={MovieScreen}/>
        <Stack.Screen name="Person" component={PersonScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
export default Navigation;