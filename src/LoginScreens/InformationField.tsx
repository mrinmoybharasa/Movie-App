import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InformationField = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        // color: darkGreen,
        color: '#dc143c',
        paddingHorizontal: 1,
        width: '70%',
        height: 50,
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 10,
        paddingLeft: 20,
        fontSize: 20,
      }}
      placeholderTextColor={'#dc143c'}></TextInput>
  );
};

export default InformationField;

const styles = StyleSheet.create({});
