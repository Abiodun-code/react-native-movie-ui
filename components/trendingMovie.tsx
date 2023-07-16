import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Carousel from "react-native-snap-carousel"
import { HomeProp, MovieProp } from '../types/stackParams';
import { DataProvider } from '../context/context';
import { image500 } from '../api/moviedb';

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
            <View  className='space-y-2'>
              <Image source={{ uri: image500(item.poster_path)}}
                style={{
                  width: width * 0.6,
                  height: height * 0.4
                }}
                className="rounded-2xl bg-cover object-fill"
              />
              <Text className="text-sm text-neutral-400 text-left">
                {item.title.length > 14 ? item.title.slice(0, 25)+"..." : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )
      }}
      firstItem={1}
      inactiveSlideOpacity={0.20}
      sliderWidth={width}
      itemWidth={width*0.62}
      slideStyle={{display: "flex", alignItems: "center"}}
      />
    </View>
  );
}

export default TrendingMovie;