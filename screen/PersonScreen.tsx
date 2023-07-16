import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { PersonProp } from '../types/stackParams';
import { style, theme } from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { DataProvider } from '../context/context';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get("window")
 
const PersonScreen = ({navigation}: PersonProp) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  
  const { loading } = useContext(DataProvider)

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
      {loading ? (
        <Loading/>
      ) : (
          <View>
            <View className='flex-row justify-center'
              style={{
                shadowColor: "gray",
                shadowRadius: 40,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,
              }}
            >
              <View className='items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-400'>
                <Image source={require("../assets/images/castImage2.png")}
                  style={{ width: width * 0.78, height: height * 0.43 }}
                />
              </View>
            </View>
            <View className="mt-6">
              <Text className="text-3xl text-white font-bold text-center">Keanu Reeves</Text>
              <Text className="text-base text-neutral-500 text-center">London, United Kingdom</Text>
            </View>
            <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Gender</Text>
                <Text className="text-neutral-300 text-sm">Male</Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Birthday</Text>
                <Text className="text-neutral-300 text-sm">1964-09-02</Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Known for</Text>
                <Text className="text-neutral-300 text-sm">Acting</Text>
              </View>
              <View className=" px-2 items-center">
                <Text className="text-white font-semibold">Popularity</Text>
                <Text className="text-neutral-300 text-sm">62.30</Text>
              </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
              <Text className="text-white text-lg">Biography</Text>
              <Text className="text-neutral-400 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil optio iste! Qui commodi neque, inventore pariatur amet, dolores accusantium perspiciatis maiores facilis excepturi saepe expedita, rem aperiam reprehenderit! Aliquid!</Text>
            </View>
          </View>
      )}
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