import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeImage = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/homeImages.png')}
        // style={{
        //   width: '100%',
        //   height: 1500,
        //   ...StyleSheet.absoluteFillObject,
        //   zIndex: -1,
        // }}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.overlay}>{children}</View>
    </View>
  );
};

export default HomeImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  overlay: {
    flex: 1,
  },
});
