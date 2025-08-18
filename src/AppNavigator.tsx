import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import {AuthContext, AuthProvider} from './context/authContext';
// import {AuthProvider} from './context/authContext';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{headerShown: true, title: 'Movie Detail'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
