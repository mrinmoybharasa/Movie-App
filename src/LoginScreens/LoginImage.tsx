import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const LoginImage = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/loginImage.jpg')}
        style={{width: '100%', height: 1000}}
      />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};

export default LoginImage;

const styles = StyleSheet.create({});
