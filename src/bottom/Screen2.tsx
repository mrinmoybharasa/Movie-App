import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/authContext';
const Screen2 = () => {
  const [state] = useContext(AuthContext);
  return (
    <View>
      <Text>Screen2</Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
