import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import Loading from '../components/Loading';


const { height, width } = Dimensions.get('window');

const SearchScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([1, 2, 3, 4]);
    let movieName = 'Infinity War and the avengers '
    return (
        <SafeAreaView className="flex-1 bg-neutral-800">
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    placeholder='search Movie'
                    placeholderTextColor={'lightgrey'}
                    className="pb-1 pl-6 font-semibold flex-1 text-base text-white tracking-wider"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="m-1 rounded-full p-3 bg-neutral-500"
                >
                    <XMarkIcon size={25} color={'white'} />

                </TouchableOpacity>
            </View>


            {/**search results */}
            {
                loading ? (
                    <Loading />
                ) :

                    results.length > 0 ? (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            className="space-y-3"
                        >
                            <Text className="font-semibold text-white ml-1">Results ({results.length})</Text>
                            <View className="flex-wrap justify-between flex-row">
                                {results.map((item, index) => {
                                    return (
                                        <TouchableWithoutFeedback key={index}
                                            onPress={() => navigation.push('Movie', item)}
                                        >
                                            <View className="space-y-2 mb-4">
                                                <Image source={require('../assets/bron2.jpg')}
                                                    className="rounded-3xl"
                                                    style={{ height: height * 0.30, width: width * 0.44 }}
                                                />
                                                <Text className="ml-1 text-neutral-300">
                                                    {
                                                        movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName
                                                    }
                                                </Text>
                                            </View>

                                        </TouchableWithoutFeedback>
                                    )
                                })}
                            </View>

                        </ScrollView>

                    ) : (
                        <View className="flex-row justify-center">
                            <Image source={require('../assets/marvel.png')}
                                className="h-96 w-96"
                            />
                        </View>

                    )
            }

        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})