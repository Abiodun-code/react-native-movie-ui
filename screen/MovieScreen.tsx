import React, { useEffect, useState } from "react"
import { 
  View, 
  Text, 
  ScrollView, 
  Platform, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Dimensions, 
  Image 
} from "react-native"
import { HomeProp, MovieProp } from "../types/stackParams"
import { StatusBar } from "expo-status-bar"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { style, theme } from "../theme"
import { LinearGradient } from "expo-linear-gradient"
import MovieCast from "../components/MovieCast"
import SimilarMovie from "../components/SimilarMovie"

const {width, height} = Dimensions.get("window")

const MovieScreen = ({ navigation, route }: MovieProp)=>{

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const movieName = "Ant-Man and the wasp: Quantumania"

  return(
    <View className="relative flex-1 bg-neutral-900">
      <StatusBar style="light" />
      {/* Back button and Movie poster */}
      <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
    >
      <View className="w-full">
          <SafeAreaView style={styles.andriodSafeAreaView} className="absolute w-full z-20 flex-row justify-between items-center px-4 ">
            <TouchableOpacity
              onPress={()=>navigation.goBack()} style={style.background}
              activeOpacity={0.7} className="rounded-xl p-1">
              <MaterialCommunityIcons name="chevron-left" size={30} color={"white"}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              >
                <MaterialCommunityIcons
                  name={isFavorite ? "heart" : "heart-outline"} size={30} 
                  color={isFavorite ? theme.background : "white"}
                />
            </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image 
            className=" rounded-b-xl"
            style={{width: width, height:height*0.55}}
            source={require("../assets/images/moviePoster2.png")}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{width:width, height:height*0.40}}
            start={{x:0.5, y: 0}}
            end={{x:0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* movie details */}
      <View className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wide">
          {movieName}
        </Text>
        {/* status, release, runtime */}
          <Text className="text-neutral-400 text-center text-base font-semibold">
            Release ~ 2020 ~ 170 min
          </Text>
          {/* genres */}
          <View className="flex-row justify-center mx-4 space-x-2">
            <Text className="text-neutral-400 text-center text-base font-semibold">
              Action ~
            </Text>
            <Text className="text-neutral-400 text-center text-base font-semibold">
              Thrill ~
            </Text>
            <Text className="text-neutral-400 text-center text-base font-semibold">
              Comedy
            </Text>
          </View>
          <Text className="text-neutral-400 items-center mx-4 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil optio iste! Qui commodi neque, inventore pariatur amet, dolores accusantium perspiciatis maiores facilis excepturi saepe expedita, rem aperiam reprehenderit! Aliquid!</Text>
      </View>
      {/* movie cast */}
        <MovieCast navigation={navigation} route={route} />
      {/* similar movie */}
      <SimilarMovie navigation={navigation} route={route}/>
    </ScrollView>
    </View>
    
  )
}

export default MovieScreen

const android = Platform.OS === "android"

const styles = StyleSheet.create({
  andriodSafeAreaView: {
    paddingTop: android ? 50 : 0
  }
})