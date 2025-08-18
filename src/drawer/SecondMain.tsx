import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import HomeImage from '../utils/HomeImage';
import {useNavigation} from '@react-navigation/native';
import ImageSlider from '../assets/slidComponents/ImageSlider';
const images1 = [
  {id: '32', source: require('../assets/ace.jpg')},
  {id: '13', source: require('../assets/kubraa.jpg')},
  {id: '14', source: require('../assets/mission_impossible_2023.jpg')},
  {id: '15', source: require('../assets/Movie_Poster.jpg')},
  {id: '16', source: require('../assets/sitaare.jpg')},
  {id: '17', source: require('../assets/Taken_3_Poster.jpg')},
];

const SecondMain = () => {
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
    <HomeImage>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <ImageBackground
            source={require('../assets/john2.jpg')} // Replace with your image
            style={styles.images}
            resizeMode="cover">
            <View style={styles.overlay} />

            <View style={styles.content}>
              <Text style={styles.title}>Keanu</Text>
              <Text style={styles.subtitle}>2023 • 1 season</Text>

              <View style={styles.genres}>
                <Text style={styles.genre}>Action</Text>
                <Text style={styles.genre}>Adventure</Text>
                <Text style={styles.genre}>Science Fiction</Text>
              </View>

              <View style={styles.rating}>
                <AntDesign name="star" size={18} color="#FFD700" />
                <Text style={styles.ratingText}>8.7</Text>
              </View>
            </View>
            <Text style={styles.headingText}>
              Best Deadpool Movie wallpapers and HD background images for your
              device! Just browse through our collection of more than 40 hight
              resolution wallpapers and download them for free for your desktop
              or phone.
            </Text>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.header}>Episodes</Text>
          <TouchableOpacity>
            <Text style={styles.MoreVirw2}>See All...</Text>
          </TouchableOpacity>
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
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.MoreVirw2}>See All...</Text>
          </TouchableOpacity>
          <ImageSlider />
        </View>
        <TouchableOpacity style={styles.watchButton}>
          <Text style={styles.watchText}>Watch now</Text>
        </TouchableOpacity>
      </ScrollView>
    </HomeImage>
  );
};

export default SecondMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  images: {
    width: '100%',
    height: 600,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 5,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  genre: {
    backgroundColor: '#1e3a5f',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 5,
  },

  ratingText: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    marginLeft: 6,
  },
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 15,
    rowGap: 10,
    paddingBottom: 10,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    margin: 5,
    paddingLeft: 10,
  },
  watchButton: {
    // position: 'absolute',
    // alignSelf: 'center',
    // bottom: 0,
    // backgroundColor: '#2E64FE',
    // paddingHorizontal: 40,
    // paddingVertical: 15,
    // borderRadius: 15,
    // zIndex: 1,
    // width: '90%',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    backgroundColor: '#2E64FE',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 15,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  watchText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  //
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
  MoreVirw2: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 7,
    paddingTop: 10,
  },
});
