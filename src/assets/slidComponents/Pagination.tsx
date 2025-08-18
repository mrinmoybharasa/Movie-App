import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Dot from './Dot';

const Pagination = ({date, x, size, dotColor}) => {
  return (
    <View style={styles.PaginationContainer}>
      {date.map((_, i) => {
        return <Dot key={i} x={x} index={i} size={size} dotColor={dotColor} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  PaginationContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
