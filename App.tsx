import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/LoginScreens/LoginPage';
import SignUp from './src/LoginScreens/SignUp';
import Login from './src/LoginScreens/Login';
import Parent from './src/normal/Parent';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AuthContext, AuthProvider} from './src/context/authContext';
import Toast from 'react-native-toast-message';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <>
        <AuthProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginHome" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="parent" component={Parent} />
          </Stack.Navigator>
        </AuthProvider>
        <Toast />
      </>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
