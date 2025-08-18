// navigation/HomeStackNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../bottom/Home';
import MovieDetailScreen from '../normal/MovieDetailScreen';
import MovieDetailTwo from '../normal/MovieDetailTwo';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{title: 'Movie Details', headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetailTwo"
        component={MovieDetailTwo}
        options={{title: 'MovieDetailTwo', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
