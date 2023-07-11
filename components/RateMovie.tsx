import React, { useContext } from "react"
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from "react-native"
import { DataProvider } from "../context/context"
import { style } from '../theme';
import { HomeProp, MovieProp } from "../types/stackParams";

// dimansional width and height
const { width, height } = Dimensions.get("window")

const RateMovie = ({ navigation }: HomeProp) => {

  const { topRated } = useContext(DataProvider)

  const movieName = "Ant-Man and the wasp: Quantumania"

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">Top Rated</Text>
        <TouchableOpacity>
          <Text style={style.text} className="text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {topRated.map((item, index) => {
          return (
            <TouchableWithoutFeedback key={index}
              onPress={() => navigation.navigate("Movie", { itemProp: item })}
            >
              <View className="space-y-1 mr-4">
                <Image source={require("../assets/images/moviePoster2.png")}
                  className="rounded-2xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-neutral-300 ml-1">{
                  movieName.length > 14 ? movieName.slice(0, 14) + "...." : movieName
                }</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default RateMovie