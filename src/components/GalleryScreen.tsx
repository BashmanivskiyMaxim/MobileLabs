import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PhotoItem from './PhotoItem';

const GalleryScreen = () => {
  const photo = [
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
    {source: require('../assets/politehnika.jpg')},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {photo.map((item, index) => {
        return <PhotoItem key={index} sourceImg={item.source} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default GalleryScreen;
