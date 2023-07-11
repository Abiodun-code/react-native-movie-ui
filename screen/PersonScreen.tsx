import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { PersonProp } from '../types/stackParams';
import { style, theme } from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const {width, height} = Dimensions.get("window")
 
const PersonScreen = ({navigation}: PersonProp) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <ScrollView className='flex-1 bg-neutral-900' contentContainerStyle={{paddingBottom: 20}}>
      <StatusBar style="light" />
      {/* Back button */}
      <SafeAreaView style={styles.andriodSafeAreaView} className="z-20 flex-row justify-between items-center px-4 ">
        <TouchableOpacity
          onPress={() => navigation.goBack()} style={style.background}
          activeOpacity={0.7} className="rounded-xl p-1">
          <MaterialCommunityIcons name="chevron-left" size={30} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <MaterialCommunityIcons
            name={isFavorite ? "heart" : "heart-outline"} size={30}
            color={isFavorite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/*  person details*/}
      <View>
        <View className='flex-row justify-center'
          style={{
            shadowColor: "gray",
            shadowRadius: 40,
            shadowOffset:{width: 0, height: 5},
            shadowOpacity: 1,
          }}
        >
          <View className='items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-400'>
            <Image source={require("../assets/images/castImage2.png")}
              style={{ width: width * 0.78, height: height * 0.43 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

 
export default PersonScreen;

const android = Platform.OS === "android"

const styles = StyleSheet.create({
  andriodSafeAreaView: {
    paddingTop: android ? 50 : 0
  }
})