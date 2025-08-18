import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HomeImage from '../utils/HomeImage';

const suggestions = [
  {
    id: '1',
    title: "ASSASSIN'S CREED Full Movie Cinematic",
    image: require('../assets/ace.jpg'),
  },
  {
    id: '2',
    title: 'P.T. SILENT HILLS Full HD Walkthrough',
    image: require('../assets/ace.jpg'),
  },
  {
    id: '3',
    title: 'P.T. SILENT HILLS Full HD Walkthrough',
    image: require('../assets/ace.jpg'),
  },
  {
    id: '4',
    title: 'P.T. SILENT HILLS Full HD Walkthrough',
    image: require('../assets/ace.jpg'),
  },
  {
    id: '5',
    title: 'P.T. SILENT HILLS Full HD Walkthrough',
    image: require('../assets/ace.jpg'),
  },
  {
    id: '6',
    title: 'P.T. SILENT HILLS Full HD Walkthrough',
    image: require('../assets/ace.jpg'),
  },
  {
    id: '7',
    title: 'P.T. SILENT HILLS Full HD Walkthrough',
    image: require('../assets/ace.jpg'),
  },
];
const MovieDetailTwo = () => {
  return (
    <HomeImage>
      <ScrollView style={styles.container}>
        {/* Video Section */}
        <View style={styles.videoBox}>
          <ImageBackground
            source={require('../assets/arrival.jpg')}
            style={styles.video}
            resizeMode="cover">
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

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
        <FlatList
          data={suggestions}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.suggestionItem}>
              <Image source={item.image} style={styles.suggestionImage} />
              <Text style={styles.suggestionText}>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
    </HomeImage>
  );
};

export default MovieDetailTwo;

const styles = StyleSheet.create({
  //   container: {flex: 1, backgroundColor: '#121212'},
  container: {flex: 1},
  videoBox: {height: 200, backgroundColor: '#333'},
  video: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {padding: 10},
  title: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  channel: {color: 'gray', marginTop: 4},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  //
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
  sectionTitle: {color: 'white', fontSize: 16, margin: 10},
  suggestionItem: {flexDirection: 'row', margin: 10},
  suggestionImage: {width: 100, height: 60, borderRadius: 6, marginRight: 10},
  suggestionText: {color: 'white', flex: 1, flexWrap: 'wrap'},
});
