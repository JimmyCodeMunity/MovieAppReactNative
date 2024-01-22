import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles } from '../theme';
import { theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';


const { width, height } = Dimensions.get('window');


//const {height,width} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';


const MovieScreen = ({ navigation }) => {
  const { params: item } = useRoute();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
  let movieName = 'Infinity War and the avengers '
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //call movie details
  }, [item])
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="bg-black flex-1">

      {/**add a back button and a poster */}
      <View className="w-full">
        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4" + topMargin}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl mt-3 px-1">
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon size="28" strokeWidth={2.5} color={isFavorite ? theme.background : "white"} />
          </TouchableOpacity>
        </SafeAreaView>

        {
          loading ? (
            <Loading />
          ) : (
            <View>
              <Image source={require('../assets/buff.jpg')}
                style={{ width, height: height * 0.5 }}
              />
              <LinearGradient
                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                style={{ width, height: height * 0.40 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
              />
            </View>
          )
        }


      </View>

      {/**movie details here */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        {/**movie title here */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {
            movieName
          }
        </Text>

        {/**STATUS,REALEA DATE,RUNTIME */}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released . 2020 . 170 min
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action .
          </Text>

          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thriller .
          </Text>

          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy .
          </Text>
        </View>

        {/**Description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Super-Hero partners Scott Lang and Hope van Dame with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter
          Cassie Lang find themselves exploring the Quantum Realm, interracting with strange new creatures
          and embarking on an adventure that will push them beyond the limits of what they thoughy possible.
        </Text>

      </View>

      {/**Cast */}
      <Cast cast={cast} navigation={navigation} />


      {/**similar movies */}
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />

    </ScrollView>
  )
}

export default MovieScreen

