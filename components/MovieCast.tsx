import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { DataProvider } from '../context/context';
import { MovieProp } from '../types/stackParams';
 
 
const MovieCast = ({navigation}:MovieProp) => {

  const { cast } = useContext(DataProvider)

  const characterName = "John Wick"

  const personName = "Keanu Reevs"

  return (
    <View className='my-6'>
      <Text className='text-white text-lg mx-4 mb-6'>Top Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {cast && cast.map((item, index) =>{
          return(
            <TouchableOpacity
              key={index}
              className='mr-4 items-center'
              onPress={()=>navigation.navigate("Person", {personProp: item})}
            >
              {/* character image */}
              <View className='overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500'>
                <Image
                  className="h-24 w-20 rounded-2xl"
                  source={require("../assets/images/castImage1.png")}
                />
              </View>
              {/* character name */}
              <Text className='text-neutral-400 text-xs mt-1'>
                {
                  characterName.length > 10 ? characterName.slice(0,10)+"..." : characterName
                }
              </Text>
              {/* person name */}
              <Text className='text-neutral-400 text-xs mt-1'>
                {
                  personName.length > 10 ? personName.slice(0, 10) + "..." : personName
                }
              </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}

 
export default MovieCast;