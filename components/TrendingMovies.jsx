import { Text, View, TouchableWithoutFeedback ,Image,Dimensions} from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default function TrendingMovies({ data,navigation }) {
    const handleClick = ({item}) => {
        navigation.navigate('Movie', item);
    }
    
    return (
        <View className="mt-8">
            <Text className="text-white text-xl mx-4 mb-5">TrendingMovies</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={windowWidth}
                itemWidth={windowWidth*0.62}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />

        </View>
    )
}


const MovieCard = ({item,handleClick}) => {
    console.log('item.poster_path:',item.poster_path);
    return (

        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
            source={require('../assets/buff.jpg')}
            style={{
                width: windowWidth*0.6,
                height:windowHeight*0.4,
            }}
            className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}




