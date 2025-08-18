import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomImageCarousal from './CustomImageCarousal';

const ImageCorouselScre = () => {
  const date = [
    {
      image: require('../skylines.jpg'),
    },
    {
      image: require('../terminator_dark_fate.jpg'),
    },
    {
      image: require('../arrival.jpg'),
    },
    {
      image: require('../Rebel_Moon_Part_2.jpg'),
    },
    {
      image: require('../annihilation.jpg'),
    },
    {
      image: require('../foundation.jpg'),
    },
    {
      image: require('../slid7.jpg'),
    },
  ];
  // const images =[
  //   {
  //     image: require('../HR2.png'),

  //   },
  //   {
  //     image: require('../AllQuietOnThe.jpg'),
  //   },
  //   {
  //     image: require('../65.jpg'),
  //   },
  //   {
  //     image: require('../hd.jpg')
  //   },
  //   {
  //      image: require('../horror.jpg'),
  //   }

  // ];
  //  const handlePress = (item) => {
  //   Alert.alert('Image Pressed', `Image ID: ${item.id}`);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <CustomImageCarousal
          date={date}
          autoPlay={true}
          pagination={true}
          dotColor={'white'}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageCorouselScre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: 5,
    // backgroundColor: 'white',
  },
});
