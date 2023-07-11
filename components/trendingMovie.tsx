import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Carousel from "react-native-snap-carousel"
import { HomeProp, MovieProp } from '../types/stackParams';
import { DataProvider } from '../context/context';

// dimansional width and height
const { width, height } = Dimensions.get("window")

//trending movie
const TrendingMovie = ({ navigation }: HomeProp) => {

  const { trending } = useContext(DataProvider)

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending Movie</Text>
      <Carousel
      data={trending}
      renderItem={({ item }) =>{
        return (
          <TouchableWithoutFeedback
          onPress={()=> navigation.navigate("Movie", {itemProp: item})}
          >
            <Image source={require("../assets/images/moviePoster1.png")}
              style={{
                width: width * 0.6,
                height: height * 0.4
              }}
              className="rounded-2xl bg-cover object-fill"
            />
          </TouchableWithoutFeedback>
        )
      }}
      firstItem={1}
      inactiveSlideOpacity={0.40}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{display: "flex", alignItems: "center"}}
      />
    </View>
  );
}

export default TrendingMovie;