import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GalleryItem } from './GalleryItem';
import { useAxios } from './hooks/useAxios';
import { ErrorMessage, Loading } from './TextMessages';
import { colors } from './constants';
import { connect } from 'react-redux';
import { addPhotos, fetchPhotosError } from './redusers/photos';

export const GalleryScreenOption = {
  headerShown: true,
  headerTitle: 'Gallery',
  headerStyle: {
    backgroundColor: 'red',
    shadowColor: 'red'
  },
}

export const GalleryScreen = () => {
  const { error, fetchData, response, isLoading } = useAxios("/photos");

  useEffect(() => {
    fetchData(); 
  }, []);

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage />
  }

  
  
  return (
    <View style={styles.container}>
      <FlatList
        data={response}
        renderItem={({ item }) => <GalleryItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.wrapper}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


const mapStateToProps = (state: any) => ({
  photos: state.gallery.photos,
  error: state.gallery.error,
});

const mapDispatchToProps = {
  fetchPhotosError,
  addPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding:20,
  },
  wrapper:{
    backgroundColor: colors.white,
    marginBottom: 50,
  }
})
