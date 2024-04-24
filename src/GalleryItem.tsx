import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontWeight } from './constants';


export const GalleryItem = ({ item }: any) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.urls.regular }} style={styles.image} />

      <Text style={styles.author}>{item.user.name}</Text>
      <Text style={styles.description}>{item.alt_description}</Text>
    </View>
  );
};

const WIDTH = Dimensions.get('window').width * .42

const styles = StyleSheet.create({
  itemContainer: {
    width: WIDTH
  },
  image: {
    width: WIDTH,
    height: Dimensions.get('window').width * .4,
    resizeMode: 'cover',
    marginTop: 10
   
  },
  author:{
    marginTop: 5,
    color: colors.niceGray,
    fontWeight: fontWeight.bolt
  },
  description: {
    marginTop:3,
    color: colors.grey,
  },
});