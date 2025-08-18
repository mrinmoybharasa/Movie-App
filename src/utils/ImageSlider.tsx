import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';

const ImageSlider = () => {
  // const SliderData = [
  //   {
  //     id: '01',
  //     image: require('../assets/movies image/man.jpg'),
  //   },
  //   {
  //     id: '02',
  //     image: require('../assets/movies image/slide_2.jpg'),
  //   },
  //   {
  //     id: '03',
  //     image: require('../assets/movies image/slide_3.jpg'),
  //   },
  //   {
  //     id: '04',
  //     image: require('../assets/movies image/slide4.jpg'),
  //   },
  // ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImageSlider</Text>
      <FlatList
        data={SliderData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Hide scroll indicator
        pagingEnabled={true} // Enable paging for smooth scrolling
        contentContainerStyle={styles.listContainer} // Add padding to the list container
      />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set a background color for the entire view
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Center the title text
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15, // Add space between the images
  },
  image: {
    width: 300, // Fixed width for images
    height: 200, // Fixed height for images
    resizeMode: 'cover', // Maintain aspect ratio and cover the area
  },
  listContainer: {
    paddingHorizontal: 10, // Add padding to the left and right of the FlatList container
  },
});
