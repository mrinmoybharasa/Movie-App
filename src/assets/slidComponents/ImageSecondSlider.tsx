import {useNavigation} from '@react-navigation/native';
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

const {width} = Dimensions.get('window');

const images1 = [
  {
    id: '6',
    source: require('../Deadpool_(2016_poster).png'),
  },
  {
    id: '7',
    title: 'Oppenheimer',
    genre: 'Action',
    duration: '180 mins',
    source: require('../animal_poster.jpg'),
  },
  {id: '8', source: require('../chhaava.jpeg')},
  {id: '9', source: require('../hallowed.jpeg')},
  {id: '10', source: require('../oppenheimer.jpeg')},
  {id: '11', source: require('../horror.jpg')},
];

const ImageSecondSlider = () => {
  const navigation = useNavigation();
  const handlePress = item => {
    navigation.navigate('MovieDetailTwo', {id: item.id});
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

export default ImageSecondSlider;

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
