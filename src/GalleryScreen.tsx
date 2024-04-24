import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {GalleryPhotoItem} from './GalleryPhotoItem';
import {useAxios} from './hooks/useAxios';
import {ErrorMessage, Loading} from './TextMessages';
import {colors} from './constants';

export const GalleryScreen = () => {
  const {error, fetchData, response, isLoading} = useAxios('/photos');

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={response}
        renderItem={({item}: any) => <GalleryPhotoItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.wrapper}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
  wrapper: {
    backgroundColor: colors.white,
    marginBottom: 50,
  },
});
