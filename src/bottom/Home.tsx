import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HomeImage from '../utils/HomeImage';
import ImageSlider from '../assets/slidComponents/ImageSlider';
import ImageCorouselScre from '../assets/slidComponents/ImageCorouselScre';
import {ScrollView} from 'react-native-gesture-handler';
import ImageSecondSlider from '../assets/slidComponents/ImageSecondSlider';
import ImageThardSlider from '../assets/slidComponents/ImageThardSlider';
import ImageFourthSlider from '../assets/slidComponents/ImageFourthSlider';
import ImageFifthSlider from '../assets/slidComponents/ImageFifthSlider';
// import ImageThardSlider from '../assets/slidComponents/ImageThardSlider';

const Home = () => {
  return (
    <HomeImage>
      <ScrollView>
        <View style={styles.container}>
          {/* <SliderBox
          images={images}
          resizeMode={'cover'} // Makes sure images scale appropriately
          dotColor="white"
          inactiveDotColor="gray"
          autoplay
          circleLoop
        /> */}
          <SafeAreaView>{/* <ImageCorouselScre /> */}</SafeAreaView>
          <ImageCorouselScre />
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.MoreVirw1}>See All...</Text>
          </TouchableOpacity>
          <ImageSlider />
        </View>
        <View>
          <ImageFifthSlider />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.MoreVirw2}>See All...</Text>
          </TouchableOpacity>
          <ImageSecondSlider />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.MoreVirw2}>See All...</Text>
          </TouchableOpacity>
          <ImageThardSlider />
        </View>
        <View>
          {/* <TouchableOpacity>
            <Text style={styles.MoreVirw2}>See All...</Text>
          </TouchableOpacity> */}
          <ImageFourthSlider />
        </View>
      </ScrollView>
    </HomeImage>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
  },
  MoreVirw1: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 7,
    paddingTop: 0,
  },
  MoreVirw2: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'right',
    paddingRight: 7,
    paddingTop: 10,
  },
});
