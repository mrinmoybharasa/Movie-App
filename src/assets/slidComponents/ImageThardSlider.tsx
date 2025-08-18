import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const images1 = [
  {id: '12', source: require('../ace.jpg')},
  {id: '13', source: require('../kubraa.jpg')},
  {id: '14', source: require('../mission_impossible_2023.jpg')},
  {id: '15', source: require('../Movie_Poster.jpg')},
  {id: '16', source: require('../sitaare.jpg')},
  {id: '17', source: require('../Taken_3_Poster.jpg')},
];

const ImageThardSlider = () => {
  const navigation = useNavigation();

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
  );
};

export default ImageThardSlider;

const styles = StyleSheet.create({
  Secondcontainer: {
    paddingTop: 16,
  },

  image: {
    width: 130,
    height: 200,
    padding: 30,
    marginLeft: 10,
    resizeMode: 'cover',
    borderRadius: 15,
  },
});

// import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
// import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';
// // import {useNavigation} from '@react-navigation/native';

// const ImageThardSlider = () => {
//   //   const item = {
//   //     id: '1',
//   //     title: 'Sample Item',
//   //     source: require('../horror.jpg'),
//   //   };
//   const item = [
//     {
//       id: '1',
//       title: 'Sample Item',
//       source: require('../horror.jpg'),
//     },
//     {
//       id: '2',
//       title: 'Two Item',
//       source: require('../HR2.png'),
//     },
//   ];
//   //   const itemOne = {
//   //     id: '2',
//   //     title: 'Second Item',
//   //     source: require('../HR2.png'), // Make sure this file exists
//   //   };

//   const handlePress = item => {
//     // const navigation = useNavigation();
//     console.log('Navigating with:', item);
//     // navigation.navigate('MovieFirstStack', {item});
//   };
//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => handlePress(item)} activeOpacity={0.7}>
//       <Image source={item.source} style={styles.imageOne} />
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       <View style={styles.containerOne}>
//         <FlatList
//           data={item}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={item => item.id}
//           renderItem={renderItem}
//         />
//       </View>
//     </View>
//   );
// };

// export default ImageThardSlider;

// const styles = StyleSheet.create({
//   containerOne: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   imageOne: {
//     width: 130,
//     height: 200,
//     resizeMode: 'cover',
//   },
// });
