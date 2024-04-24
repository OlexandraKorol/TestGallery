import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../store';
import { colors, fontWeight } from './constants';

const FotoScreenImage = () => {
  const photo:any = useSelector<RootState>(state => state.photo);

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.urls.regular }} style={styles.image} />

      <Text style={styles.author}>{photo.user.name}</Text>
      <Text style={styles.description}>{photo.alt_description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * .5,
    marginTop: 10,
  },
  author: {
    marginTop: 5,
    fontSize: 40,
    color: colors.niceGray,
    fontWeight: fontWeight.bolt,
    paddingLeft: 20
  },
  description: {
    fontSize: 20,
    marginTop: 3,
    color: colors.grey,
    paddingLeft: 20
  },
});

const mapStateToProps = (state: any) => ({
  image: state.photo.galleryItem
});


export default connect(mapStateToProps)(FotoScreenImage);
