import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';

import LoginImage from './LoginImage';
import InformationField from './InformationField';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../context/authContext';
import Toast from 'react-native-toast-message';
const Login = props => {
  ///
  const [state, setState] = useContext(AuthContext);
  //
  const navigation = useNavigation();
  const [UserName, setUserName] = useState('');

  const [Password, setPassword] = useState('');
  console.log(UserName, Password);
  const user = async () => {
    // return Alert.alert(UserName, Password);

    // if (UserName === 'mrinmoybharasa@gmail.com' && Password === 'mrinmoy1234') {
    //   Alert.alert(`Login successfully ${UserName}`);
    //   navigation.navigate('parent');
    // } else {
    //   Alert.alert(`User name can not found`);
    // }
    ///
    try {
      if (!UserName || !Password) {
        return Alert.alert('invalid');
      }
      const {data} = await axios.post('/auth/Login', {
        email: UserName,
        password: Password,
      });
      setState(data);
      await AsyncStorage.setItem('@user', JSON.stringify(data));

      // Alert.alert(data && data.message);
      //
      Toast.show({
        type: 'success',
        text1: 'Login successful!',
        text2: 'Welcome back!', 
        position: 'top', 
        visibilityTime: 10000,
      });

      navigation.navigate('parent');
    } catch (error) {
      Alert.alert(error.response.data.message);

      console.log(error);
    }
  };

  ///chacl local storage data
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem('@user');
    console.log('local storage==>', data);
  };
  getLocalStorageData();
  return (
    <LoginImage>
      <View style={{alignItems: 'center', width: 430}}>
        <Text
          style={{
            // color: 'rgb(220,220,220)',
            color: '#660000',
            fontSize: 40,
            fontWeight: 'bold',
            marginVertical: 50,
          }}>
          Login
        </Text>

        <View
          style={{
            // backgroundColor: 'white',
            // experimental_backgroundImage: {LoginImage},

            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/unknown.png')}
            style={{width: 40, height: 40}}
          />
          <Text
            style={{
              fontSize: 40,
              color: '#dc143c',
              fontWeight: 'bold',
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <InformationField
            placeholder="Email /Username"
            keybordType={'email-address'}
            value={UserName}
            onChangeText={actualData => setUserName(actualData)}
          />
          <InformationField
            placeholder="Password"
            secureTextEntry={true}
            value={Password}
            onChangeText={passwordData => setPassword(passwordData)}
          />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 200,
            }}>
            <Text style={{color: '#7fffd4', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          {/* <Button
            textColor="white"
            bgColor={darkGreen}
            buttonLabel={'login'}
            // Press={() => Alert.alert('Account create')}
            // onPress={() => user()}
            
            
          /> */}
          <TouchableOpacity
            onPress={() => user()}
            style={{
              backgroundColor: '#dc143c',
              borderRadius: 100,
              alignItems: 'center',
              width: 350,
              height: 43,

              paddingVertical: 5,
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 23, color: 'white', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('LoginHome')}>
              <Text style={{color: 'white', fontSize: 16}}>
                Don't have an account ?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#dc143c',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                SingUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LoginImage>
  );
};

export default Login;

const styles = StyleSheet.create({});
