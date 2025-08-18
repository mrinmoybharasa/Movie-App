// components/ImageSlider.js
import React from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const images = [
  {id: '1', source: require('../morblus_poster.jpg')},
  {id: '2', source: require('../hobbs_and_shaw_poster.jpg')},
  {id: '3', source: require('../65.jpg')},
  {id: '4', source: require('../hd.jpg')},
  {id: '5', source: require('../horror.jpg')},
];
/////////
// const images1 = [
//   {id: '6', source: require('../the_monstr.jpg')},
//   {id: '7', source: require('../AllQuietOnThe.jpg')},
//   {id: '8', source: require('../65.jpg')},
//   {id: '9', source: require('../hd.jpg')},
//   {id: '10', source: require('../horror.jpg')},
// ];
// const images2 = [
//   {id: '6', source: require('../the_monstr.jpg')},
//   {id: '7', source: require('../AllQuietOnThe.jpg')},
//   {id: '8', source: require('../65.jpg')},
//   {id: '9', source: require('../hd.jpg')},
//   {id: '10', source: require('../horror.jpg')},
// ];
//////////

const ImageSlider = () => {
  const navigation = useNavigation();
  ///

  // const item = {
  //   id: '1',
  //   title: 'Sample Item',
  //   source: require('../horror.jpg'), // Make sure this file exists
  // };

  // const handlePress = item => {
  //   console.log('Navigating with:', item);
  //   navigation.navigate('', {item});
  // };

  ///
  const handlePress = item => {
    navigation.navigate('MovieDetail', {id: item.id});
    // Alert.alert('Image Pressed', `You pressed image ${item.id}`);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handlePress(item)} activeOpacity={0.7}>
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    ///

    ////
    <View>
      <ScrollView>
        {/* <View style={styles.containerOne}>
          <TouchableOpacity
            onPress={() => handlePress(item)}
            activeOpacity={0.8}>
            <Image source={item.source} style={styles.imageOne} />
          </TouchableOpacity>
        </View> */}

        <View style={styles.container}>
          <FlatList
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
          {/* ////////////
          <View style={styles.Secondcontainer}>
            <FlatList
              data={images1}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
          /////////// */}
          {/* ///////////
          <View style={styles.Thardcontainer}>
            <FlatList
              data={images2}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
          ///// */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ///
  // containerOne: {
  //   marginTop: 40,
  //   alignItems: 'center',
  // },
  // imageOne: {
  //   width,
  //   height: 200,
  //   resizeMode: 'cover',
  // },
  ///
  container: {
    marginTop: 10,
  },
  Secondcontainer: {
    paddingTop: 16,
  },
  Thardcontainer: {
    paddingTop: 16,
  },
  image: {
    width: 130,
    height: 200,
    marginLeft: 10,
    resizeMode: 'cover',

    position: 'static',
    borderRadius: 15,
  },
  images1: {
    width: 130,
    height: 200,
    padding: 20,
    marginLeft: 10,
    resizeMode: 'cover',

    borderRadius: 10,
  },
  images2: {
    width: 130,
    height: 200,
    padding: 20,
    marginLeft: 10,
    resizeMode: 'cover',

    borderRadius: 10,
  },
});

export default ImageSlider;
