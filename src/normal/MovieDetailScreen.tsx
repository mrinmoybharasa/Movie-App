import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HomeImage from '../utils/HomeImage';
import ImageFourthSlider from '../assets/slidComponents/ImageFourthSlider';
import Icon from 'react-native-vector-icons/Ionicons';
import {isColor} from 'react-native-reanimated';

const MovieDetailScreen = ({route}) => {
  const popularMovies = [
    {
      id: '1',
      title: 'Batman & Robin',
      image: require('../assets/hd.jpg'),
    },
    {
      id: '22',
      title: 'Jumanji',
      image: require('../assets/alien_battlefleld_earth.jpg'),
    },
    {id: '23', title: 'Aquaman', image: require('../assets/oppenheimer.jpeg')},
    {id: '21', title: 'Manikarnika', image: require('../assets/deadpool.jpeg')},
  ];
  const suggestions = [
    {
      id: '1',
      title: "ASSASSIN'S CREED Full Movie Cinematic",
      image: require('../assets/ace.jpg'),
    },
    {
      id: '2',
      title: 'Peacock Movie Alien Full HD Walkthrough',
      image: require('../assets/alien_battlefleld_earth.jpg'),
    },
    {
      id: '3',
      title: 'peacock Movie Animal Full HD Walkthrough',
      image: require('../assets/animal_poster.jpg'),
    },
  ];

  const hindiMovies = [
    {
      id: '3',
      title: 'terminator_dark_fate_poster',
      image: require('../assets/terminator_dark_fate_poster.jpg'),
    },
    {id: '24', title: 'ace', image: require('../assets/ace.jpg')},
    {id: '25', title: 'sitaare', image: require('../assets/sitaare.jpg')},
    {id: '26', title: 'th', image: require('../assets/th.jpg')},
  ];

  const {id} = route.params;

  return (
    <HomeImage>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('../assets/arrival.jpg')}
          style={styles.banner}
          resizeMode="cover">
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>
        </ImageBackground>
        {/* Title and Channel */}
        <View style={styles.infoBox}>
          <Text style={styles.title}>The Rings of Power Official Trailer</Text>
          <Text style={styles.channel}>Amazone prime • 8M subscribers</Text>
        </View>
        {/* Action Buttons */}
        <View style={styles.actions}>
          {[
            'thumbs-up',
            'thumbs-down',
            'share-social',
            'download',
            'bookmark',
          ].map((icon, index) => (
            <TouchableOpacity key={index} style={styles.actionBtn}>
              <Icon name={icon} size={24} color="white" />
            </TouchableOpacity>
          ))}
        </View>
        {/* Subscribe Button */}
        <TouchableOpacity style={styles.subscribe}>
          <Icon name="notifications-outline" size={20} color="#fff" />
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
        {/* Suggestions */}
        <Text style={styles.sectionTitle}>Maybe you like that</Text>
        <SectionTow data={suggestions} />
        {/* <FlatList
        data={suggestions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.suggestionItem}>
            <Image source={item.image} style={styles.suggestionImage} />
            <Text style={styles.suggestionText}>{item.title}</Text>
          </View>
        )}
      /> */}
        <Section title="Popular" data={popularMovies} />

        <Section title="Hindi Movie" data={hindiMovies} />

        <ImageFourthSlider />
      </ScrollView>
    </HomeImage>
  );
};
const SectionTow = ({data}) => (
  <View>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.suggestionItem}>
          <Image source={item.image} style={styles.suggestionImage} />
          <Text style={styles.suggestionText}>{item.title}</Text>
        </View>
      )}
    />
  </View>
);
const Section = ({title, data}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAll}>See All</Text>
    </View>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Image source={item.image} style={styles.poster} />
      )}
    />
  </View>
);

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  banner: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#FFD700',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 30,
    color: '#000',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingLeft: 10,
  },
  seeAll: {
    color: 'white',
  },
  poster: {
    width: 120,
    height: 180,
    marginRight: 10,
    borderRadius: 8,
  },
  //
  infoBox: {padding: 10},
  title: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  channel: {color: 'gray', marginTop: 4},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  actionBtn: {alignItems: 'center'},
  subscribe: {
    backgroundColor: '#E50914',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscribeText: {color: 'white', marginLeft: 10, fontWeight: 'bold'},
  suggestionItem: {flexDirection: 'row', margin: 10},
  suggestionImage: {width: 100, height: 60, borderRadius: 6, marginRight: 10},
  suggestionText: {color: 'white', flex: 1, flexWrap: 'wrap'},
});
