import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { theme } from '../theme';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';


const { height, width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'my-3';

const PersonScreen = ({ navigation }) => {
  const [isFavorite, toggleFavorite] = useState(false);
  const [personMovies,setPersonMovies] = useState([1,2,3,4,5])
  const [loading,setLoading] = useState(false);
  return (

    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingottom: 20 }}>
      {/**back button goes here */}
      <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4" + verticalMargin}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl mt-3 px-1">
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />

        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
          <HeartIcon size="28" strokeWidth={2.5} color={isFavorite ? theme.background : "white"} />
        </TouchableOpacity>
      </SafeAreaView>


      {/**person details here */}
      {
      loading ? (
        <Loading/>
      ):(
        <View>
        <View className="flex-row justify-center"
          style={{
            shadowColor: 'grey',
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1
          }}
        >
          <View className="rounded-full border overflow-hidden w-72 h-72 items-center border border-neutral-500">
            <Image source={require('../assets/irving.jpg')}
              style={{ height: height * 0.43, width: width * 0.73 }}
            />
          </View>
        </View>



        <View className="mt-6">
          <Text className="text-3xl font-bold text-white text-center">
            Keanu Reeves
          </Text>

          <Text className="text-base text-neutral-500 text-center">
            London, United Kingdom
          </Text>
        </View>


        <View className="mt-6 mx-3 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center p-4">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 font-semibold">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center p-4">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 font-semibold">1992-09-02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center p-4">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 font-semibold">Acting</Text>
          </View>
          <View className="px-2 items-center p-4">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 font-semibold">64.23</Text>
          </View>

        </View>



        <View className="space-y-2 my-6 mx-4">
          <Text className="text-white text-lg">Bio</Text>
          <Text className="tracking-wide text-neutral-400">
            Keanu Reeves is a Canadian actor, producer, and musician. He was born on September 2,
            1964, in Beirut, Lebanon. Reeves is known for his roles in various genres, including
            comedy, science fiction, and action movies. He has appeared in popular films such as
            "The Matrix" trilogy, "John Wick" series, "Speed," and "Bill & Ted's Excellent Adventure."
            Reeves' parents divorced when he was young, and he moved with his mother and sister to different
            cities, including New York City and Toronto. He developed an interest in ice hockey and drama
            during his high school years. After leaving school, he pursued an acting career and made his
            professional debut in a 1984 episode of the comedy series "Hangin In.".
            Reeves has received critical acclaim for his performances and has become
            a beloved figure in the entertainment industry .
          </Text>
        </View>



        {/**Peron movies */}
        <MovieList title="Movies" hideSeeAll={true} data={personMovies}/>
      </View>
      )
      }
      
    </ScrollView>

  )
}

export default PersonScreen

const styles = StyleSheet.create({})