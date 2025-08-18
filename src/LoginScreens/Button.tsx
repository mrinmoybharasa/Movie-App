import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({bgColor, buttonLabel, textColor, Press}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={Press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: 'center',
          width: 350,
          paddingVertical: 5,
          marginVertical: 10,
        }}>
        <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
          {buttonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
