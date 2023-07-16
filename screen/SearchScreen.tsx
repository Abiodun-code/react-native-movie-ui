import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView, TextInput, TouchableOpacity, Dimensions, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import { SearchProp } from '../types/stackParams';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { DataProvider } from '../context/context';
import Loading from '../components/Loading';

const { width, height } = Dimensions.get("window")

const SearchScreen = ({ navigation, route }: SearchProp) => {

  const {results, loading} = useContext(DataProvider)

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const movieName = "Ant-Man and the wasp: Quantumania"

  return (
    <SafeAreaView style={styles.androidSafeArea} className="flex-1 bg-neutral-800">
      <StatusBar style="light"/>
      {/* Search Text Area */}
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor="lightgray"
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={()=>{}}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <MaterialIcons name="search" size={25} color="white"/>
        </TouchableOpacity>
      </View>
      {/* Results */}
      {loading ? (
        <Loading/>
      ) : (
            results.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="space-y-3"
              >
                <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
                <View className="flex-row justify-between flex-wrap">
                  {results.map((item, index) => {
                    return (
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.navigate("Movie", { itemProp: item })}
                      >
                        <View className="space-y-2 mb-4">
                          <Image
                            className=" rounded-xl"
                            style={{ width: width * 0.44, height: height * 0.3 }}
                            source={require("../assets/images/moviePoster2.png")}
                          />
                          <Text className="text-neutral-300 ml-1">
                            {
                              movieName.length > 22 ? movieName.slice(0, 22) + "..." : movieName
                            }
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )
                  })}
                </View>
              </ScrollView>
            ) : (
              <View className='flex-row justify-center'>
                <Image source={require("../assets/images/movieTime.png")}
                  className='w-96 h-96'
                />
              </View>
            )
      )}
    </SafeAreaView>
  );
}

 
export default SearchScreen;

const android = Platform.OS === "android"

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: android ? 50 : 0
  }
});
