import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import SecondMain from './SecondMain';
import ThardMain from './ThardMain';
import Profile from './Profile';
import Satting from './Satting';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const Drawer = createDrawerNavigator();

const HomeIcon = ({focused, color, size}) => (
  <Entypo name="home" size={size} color={color} />
);
const SettingIcon = ({focused, color, size}) => (
  <AntDesign name="setting" size={size} color={color} />
);
const MainThardIcon = ({focused, color, size}) => (
  <MaterialCommunityIcons name="animation-outline" size={size} color={color} />
);
const MainSecondIcon = ({focused, color, size}) => (
  <MaterialCommunityIcons name="account-outline" size={size} color={color} />
);
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerStyle: {width: 300},
        headerTintColor: '#F0F0F0',

        headerStyle: {
          backgroundColor: '#2B0503',
        },
        // drawerItemStyle: {
        //   // backgroundColor: '#2B0503',
        //   backgroundColor: '#1e1e1e',

        //   margin: 4,
        //   width: '100%',
        // },
      }}
      drawerContent={props => <Profile {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true,
          drawerIcon: HomeIcon,
          title: 'Peacock',
        }}
      />
      <Drawer.Screen
        name="SecondMain"
        component={SecondMain}
        options={{
          drawerIcon: MainSecondIcon,
          headerShown: true,
          title: 'Popular Directory',
        }}
      />
      <Drawer.Screen
        name="ThardMain"
        component={ThardMain}
        options={{drawerIcon: MainThardIcon, title: 'Favorites'}}
      />
      <Drawer.Screen
        name="Satting"
        component={Satting}
        options={{headerShown: true, drawerIcon: SettingIcon}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
