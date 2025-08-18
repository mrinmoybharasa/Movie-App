import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginImage from './LoginImage';
import Button from './Button';

const LoginPage = props => {
  return (
    <LoginImage>
      {/* <View style={styles.container}>
      <Image
        source={require('./assets/images/unknown.png')}
        style={{
          width: 80,
          height: 80,
        }}
      />
      <Text style={{fontSize: 30, color: 'white'}}>Create Account</Text>
    </View>
    <View style={styles.userIdentity}>
      <Text
        style={{
          marginLeft: 12,
          fontSize: 17,
          color: 'white',
          margin: 10,
          paddingTop: 23,
          fontWeight: 'bold',
        }}>
        User Name
      </Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email Address...."
        placeholderTextColor="#FFFFFF"
        autoCapitalize="none"
      />
      <Text
        style={{
          marginTop: 1,
          marginLeft: 20,
          fontSize: 17,
          color: 'white',
          margin: 10,
          paddingTop: 23,
          fontWeight: 'bold',
        }}>
        Password
      </Text>
      <TextInput
        style={styles.password}
        underlineColorAndroid="transparent"
        placeholder="Password...."
        placeholderTextColor="#FFFFFF"
        autoCapitalize="none"
      />
    </View> */}
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 55}}>Welcome to</Text>
        <Text style={{color: 'white', fontSize: 45, marginBottom: 40}}>
          PEACOCK !
        </Text>
        <Button
          bgColor="#dc143c"
          textColor="white"
          buttonLabel={'login'}
          Press={() => props.navigation.navigate('Login')}
        />
        <Button
          bgColor="white"
          textColor="#dc143c"
          buttonLabel={'SignUp'}
          Press={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </LoginImage>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
