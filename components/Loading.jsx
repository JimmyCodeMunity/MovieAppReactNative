import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import { theme } from '../theme';
import * as Progress from 'react-native-progress';


const {height,width} = Dimensions.get('window');

const Loading = ({navigation}) => {
  return (
    <View style={{ height,width }} className="absolute flex-row justify-center items-center">
      <Text className="text-white font-bold">Loading....</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})