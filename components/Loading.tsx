import React from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
// import * as Progress from "react-native-progress"
import { theme } from '../theme';
import { CircleSnail } from 'react-native-progress';


const { width, height } = Dimensions.get("window")
 
const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      {/* <ActivityIndicator color={theme.background} size={50}/> */}
      <CircleSnail progress={0.5} size={60} color={theme.background} />
    </View>
  );
}

 
export default Loading;