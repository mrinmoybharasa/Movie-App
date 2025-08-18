import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/authContext';
import HomeImage from '../utils/HomeImage';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ImagePicker from 'react-native-image-crop-picker';
const Screen3 = () => {
  ///
  const navigation = useNavigation();
  ///
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  ///
  const [state, setState] = useContext(AuthContext);
  const [image, setImage] = useState('');
  //logout
  const handleLogout = async () => {
    setState({user: null});
    await AsyncStorage.removeItem('@user');
    navigation.navigate('Login');
    // Alert.alert('logout Successfull');
    Toast.show({
      type: 'error',
      text1: 'Logout successful!',
      text2: 'Welcome back!', // Optional
      position: 'top', // or 'bottom'
      visibilityTime: 10000,
    });
  };
  const handleSetting = () => {
    navigation.navigate('Satting');
  };

  //profile image update
  // const userPhoto =  () => {
  //   ImagePicker.openPicker({
  //     width: 400,
  //     height: 400,
  //     cropping: true,
  //     includeBase64: true,
  //     cropperCircleOverlay: true,
  //     avoidEmptySpaceAroundImage: true,
  //     freeStyleCropEnabled: true,
  //   })
  //     .then(img => {
  //       const data = `data:${img.mime};base64,${img.data}`;
  //       setImage(data);
  //       console.log(img);
  //     })
  //     .catch(err => {
  //       console.log('Image pick cancelled', err);
  //     });
  // };
  //second
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
  //

  return (
    <HomeImage>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>My Profile</Text>

        <View style={styles.profileSection}>
          <TouchableOpacity onPress={userPhoto}>
            <View style={styles.avatarContainer}>
              <Image
                source={
                  image ? {uri: image} : require('../assets/profile2.jpg')
                }
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.cameraIcon}>
                <Icon name="camera" size={18} color="#000" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={styles.name}>
            {state?.user?.firstname} {state?.user?.lastname}
          </Text>
          <Text style={styles.email}>{state?.user?.email}</Text>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity>
            <MenuItem icon="user-plus" label="Invite Friends" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuItem icon="download" label="Downloads" />
          </TouchableOpacity>

          <MenuItem
            icon="bell"
            label="Notifications"
            isSwitch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />

          <TouchableOpacity>
            <MenuItem icon="gift" label="Rewards" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSetting}>
            <MenuItem icon="settings" label="Settings" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuItem icon="video" label="Videos" />
          </TouchableOpacity>

          <TouchableOpacity>
            <MenuItem icon="help-circle" label="Help & Support" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout}>
            <MenuItem icon="power" label="Logout" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </HomeImage>
  );
};

const MenuItem = ({icon, label, isSwitch, value, onValueChange}) => (
  <View style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <Icon name={icon} size={20} color="#fff" />
      <Text style={styles.menuText}>{label}</Text>
    </View>
    {isSwitch ? (
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor="#f1c40f"
      />
    ) : (
      <Icon name="chevron-right" size={20} color="#f1c40f" />
    )}
  </View>
);

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  cameraIcon: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    backgroundColor: '#f1c40f',
    padding: 5,
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  email: {
    color: '#aaa',
    fontSize: 14,
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
