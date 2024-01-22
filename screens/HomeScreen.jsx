import { Platform, Text, View, TouchableOpacity,ScrollView ,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'
import { fetchTrending } from '../api/moviedb'
import axios from 'axios'




const ios = Platform.OS === 'ios';
const HomeScreen = ({navigation}) => {

    const [trending,setTrending] = useState([1,2,3]);
    const [upcoming,setUpcoming] = useState([1,2,3]);
    const [toprated,setToprated] = useState([1,2,3]);
    const [action,setAction] = useState([1,2,3,4]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getTrendingMovies();
    },[])


    const getTrendingMovies = async () => {
        const data = await fetchTrending();
        
        if(data & data.results) setTrending(data.results);
        setLoading(false);

    }


    const windowHeight = Dimensions.get('window').height;
    return (
        <View className="flex-1  bg-black">
            {/*search bar and logo */}
            <SafeAreaView className={ios ? "mb-2" : 'mb-3'}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className="text-white font-bold text-3xl">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon sixe="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

            
            {
                loading?(
                    <Loading/>
                ):(
                    <ScrollView showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:10}}>
                {/**Trending movies carousel */}
                {trending.length>0 && <TrendingMovies data={trending}/>}


                {/**ujpcoming movies */}
                <MovieList title="Upcoming" data={upcoming}/>




                {/**toprated movies */}
                <MovieList title="Top Rated" data={toprated}/>




                {/**toprated movies */}
                <MovieList title="Action" data={action}/>
            </ScrollView>
                )
            }



            
        </View>
    )
}

export default HomeScreen
