import React, { useContext } from "react"
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from "react-native"
import { DataProvider } from "../context/context"
import { style } from '../theme';
import { HomeProp, MovieProp } from "../types/stackParams";
import { fallbackMoviePoster, image185 } from "../api/moviedb";

// dimansional width and height
const { width, height } = Dimensions.get("window")

const MovieList = ({navigation}:HomeProp)=>{

  const { upcoming } = useContext(DataProvider)

  const movieName = "Ant-Man and the wasp: Quantumania"

  return(
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">Upcoming</Text>
        <TouchableOpacity>
          <Text style={style.text} className="text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {upcoming.map((item, index)=>{
          return(
            <TouchableWithoutFeedback key={index}
              onPress={() => navigation.navigate("Movie", { itemProp: item })}
            >
              <View className="space-y-1 mr-4">
                <Image source={{uri: image185(item.poster_path) || fallbackMoviePoster}}
                  className="rounded-2xl"
                  style={{width: width*0.33, height:height*0.22}}
                />
                <Text className="text-neutral-300 ml-1">{
                  item.title.length > 14 ? item.title.slice(0, 14) + "...." : item.title
                }</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default MovieList