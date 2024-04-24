import React from 'react';
import _ from 'lodash';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch,} from 'react-redux';
import {colors, fontWeight} from './constants.tsx';
import { actions } from '../store/photo.ts';

export const GalleryPhotoItem = ({item}: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const onHandleShowItem = () => {
    dispatch(actions.show(item))
    navigation.navigate('Photo');
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleShowItem()}
    >
      <Image source={{uri: item.urls.regular}} style={styles.image} />
      <Text style={styles.author}>{item.user.name}</Text>
      <Text style={styles.description}>{item.alt_description}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.gallery.photoItem,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPhotoItem);

const WIDTH = Dimensions.get('window').width * 0.42;

const styles = StyleSheet.create({
  itemContainer: {
    width: WIDTH,
  },
  image: {
    width: WIDTH,
    height: Dimensions.get('window').width * 0.4,
    resizeMode: 'cover',
    marginTop: 10,
  },
  author: {
    marginTop: 5,
    color: colors.niceGray,
    fontWeight: fontWeight.bolt,
  },
  description: {
    marginTop: 3,
    color: colors.grey,
  },
});
