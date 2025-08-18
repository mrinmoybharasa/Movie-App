import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HomeImage from '../utils/HomeImage';
const {width} = Dimensions.get('window');
const favorites = [
  {
    id: '1',
    title: 'Oppenheimer',
    genre: 'Action',
    duration: '180 mins',
    rating: 9.2,
    image: require('../assets/oppenheimer_poster.jpg'), // Replace with your local image
  },
  {
    id: '2',
    title: 'Quantumania',
    genre: 'Action',
    duration: '130 mins',
    rating: 7.8,
    image: require('../assets/quantumania_poster.jpg'),
  },
  {
    id: '3',
    title: 'Hallowed',
    genre: 'Biography',
    duration: '121 mins',
    rating: 7.4,
    image: require('../assets/hallowed.jpeg'),
  },
];

const recommended = [
  {
    id: '4',
    title: 'Animal',
    genre: 'Action',
    duration: '126 mins',
    rating: 8.3,
    image: require('../assets/animal_poster.jpg'),
  },
  {
    id: '5',
    title: 'Sitaare Zameen Par',

    genre: 'Comedy',
    duration: '134 mins',
    rating: 9.2,
    image: require('../assets/sitaare.jpg'),
  },
  {
    id: '6',
    title: 'Avatar',
    genre: 'Fantasy',
    duration: '139 mins',
    rating: 7.9,
    image: require('../assets/avatar_poster.jpg'),
  },
  {
    id: '7',
    title: 'Annihilation',
    genre: 'Fantasy',
    duration: '139 mins',
    rating: 6.8,
    image: require('../assets/annihilation_poster.jpg'),
  },
];
const ThardMain = () => {
  return (
    <HomeImage>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Favorites</Text>
        <FlatList
          horizontal
          data={favorites}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.favoriteCard}>
              <Image source={item.image} style={styles.favoriteImage} />
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>⭐ {item.rating}</Text>
              </View>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieInfo}>
                {item.genre} • {item.duration}
              </Text>
            </View>
          )}
        />

        <Text style={styles.header}>Recommended</Text>
        <View style={styles.recommendedContainer}>
          {recommended.map(item => (
            <View key={item.id} style={styles.recommendedCard}>
              <Image source={item.image} style={styles.recommendedImage} />
              <View style={styles.ratingBadgeSmall}>
                <Text style={styles.ratingText}>⭐ {item.rating}</Text>
              </View>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieInfo}>
                {item.genre} • {item.duration}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </HomeImage>
  );
};

export default ThardMain;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0f0f0f',
    flex: 1,
    padding: 16,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 20,
  },
  favoriteCard: {
    width: width * 0.6,
    marginRight: 15,
  },
  favoriteImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
  ratingBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#34C759',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingBadgeSmall: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#34C759',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  movieTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '600',
  },
  movieInfo: {
    color: '#aaa',
    fontSize: 14,
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  recommendedCard: {
    width: width / 2.3,
    marginBottom: 20,
  },
  recommendedImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
});
