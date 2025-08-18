import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen2 from './Screen2';

import Home from './Home';
import Screen3 from './Screen3';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeStackNavigator from '../Stack/HomeStackNavigator';

const HomeIcon = <Entypo name="home" size={30} color="#900" />;

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'black',

        tabBarStyle: {
          backgroundColor: '#450805',
        },
      }}>
      {/* <Bottom.Screen
        name="HomeMain"
        component={Home} //
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      /> */}
      <Bottom.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        // options={{headerShown: false}}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="pie-chart" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{
          title: 'User',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
