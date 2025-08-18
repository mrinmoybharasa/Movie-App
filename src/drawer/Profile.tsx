import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeImage from '../utils/HomeImage';
import Icon from 'react-native-vector-icons/Feather';
import {AuthContext} from '../context/authContext';
import ImagePicker from 'react-native-image-crop-picker';
const Profile = props => {
  //
  const [image, setImage] = useState('');
  // const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [state] = useContext(AuthContext);
  ///
  const userPhoto = async () => {
    try {
      const img = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        includeBase64: true,
        cropperCircleOverlay: true,
        avoidEmptySpaceAroundImage: true,
        freeStyleCropEnabled: true,
      });

      const data = `data:${img.mime};base64,${img.data}`;
      setImage(data);

      // save in async storage
      await AsyncStorage.setItem('@profileImage', data);
    } catch (err) {
      console.log('Image pick cancelled', err);
    }
  };
  //useEffect
  React.useEffect(() => {
    const loadImage = async () => {
      const savedImage = await AsyncStorage.getItem('@profileImage');
      if (savedImage) setImage(savedImage);
    };
    loadImage();
  }, []);
  //useEffect
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <View style={styles.container}>
        <View style={styles.Parent}>
          <TouchableOpacity style={styles.mainContainer} onPress={userPhoto}>
            <View style={styles.leftContainer}>
              <Image
                source={
                  image ? {uri: image} : require('../assets/profile2.jpg')
                }
                style={{
                  width: 100,
                  height: 100,

                  borderRadius: 120 / 2,
                  borderWidth: 1,
                  shadowColor: '#121212',
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.cameraIcon}>
                <Icon name="camera" size={18} color="#000" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View style={styles.emailName}>
            <Text style={styles.name}>
              {state?.user?.firstname} {state?.user?.lastname}
            </Text>
            {/* <Text style={styles.email}>mrinmoybharasa@gmail.com</Text> */}
          </View>
        </View>

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}></DrawerItemList>
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Parent: {
    // backgroundColor: '#DC143C',
    backgroundColor: '#450805',
    height: '28%',
    borderBottomRightRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  mainContainer: {},
  emailName: {},
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#F7F7F7',
    paddingTop: 5,
  },
  email: {
    fontSize: 13,
    textDecorationLine: 'underline',
    color: '#000EC1',
  },
  cameraIcon: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    backgroundColor: '#f1c40f',
    padding: 5,
    borderRadius: 20,
  },
});
