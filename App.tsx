import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/appNavigation';
import React from 'react';
import AppContext from './context/context';

const App = () => {
  return (
    <Navigation/>
  );
}

export default ()=>(
  <AppContext> 
    <App/>
  </AppContext>
);