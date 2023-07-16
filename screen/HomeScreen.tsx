import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HomeProp, MovieProp } from '../types/stackParams';
import { useContext, useEffect, useState } from 'react';
import { Octicons, EvilIcons } from '@expo/vector-icons';
import { style } from '../theme';
import TrendingMovie from '../components/trendingMovie';
import MovieList from '../components/MovieList';
import RateMovie from '../components/RateMovie';
import { DataProvider } from '../context/context';
import Loading from '../components/Loading';

const HomeScreen = ({navigation, route}: HomeProp) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const {loading} = useContext(DataProvider)

  return (
    <SafeAreaView style={styles.andriodSafeAreaView} className="flex-1 bg-neutral-800">
      <StatusBar style="light" />
      {/* Search bar and Logo */}
      <View className={android ? "mb-3" : "-mb-2"}>
        <View className="flex-row justify-between items-center mx-4">
          <Octicons name="three-bars" size={24} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={style.text}>M</Text>ovies
            </Text>
          <TouchableOpacity activeOpacity={0.4} onPress={()=> navigation.navigate("Search")}>
            <EvilIcons name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <Loading/>
      ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}>
            {/* Trending Movie carousel */}
            <TrendingMovie navigation={navigation} route={route} />
            {/* Upcoming movie carousel */}
            <MovieList navigation={navigation} route={route} />
            {/* Upcoming movie carousel */}
            <RateMovie navigation={navigation} route={route} />
          </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default HomeScreen

const android = Platform.OS === "android"

const styles = StyleSheet.create({
  andriodSafeAreaView:{
    paddingTop: android ? 50 : 0
  }
})