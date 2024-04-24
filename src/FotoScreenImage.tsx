import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../store';

const FotoScreenImage = () => {
  const photo = useSelector<RootState>(state => state.photo);

  return (
    <View style={styles.container}>
      <Text>FotoScreenImage</Text>

      <Image source={{ uri: photo.urls.regular }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

const mapStateToProps = (state: any) => ({
  image: state.photo.galleryItem
});


export default connect(mapStateToProps)(FotoScreenImage);
