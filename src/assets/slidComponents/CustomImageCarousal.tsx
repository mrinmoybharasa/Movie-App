import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import Pagination from './Pagination';
import CustomImage from './CustomImage';

const CustomImageCarousal = ({date, pagination, autoPlay, dotColor}) => {
  const scrollViewRef = useAnimatedRef();
  const interval = useRef(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newDate, setNewDate] = useState([
    {
      key: 'spacer-left',
    },
    ...date,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.9;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  useEffect(() => {
    setNewDate([{key: 'spacer-left'}, ...date, {key: 'spacer-right'}]);
  }, [date]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: e => {
      offSet.value = e.contentOffset.x;
    },
  });
  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (date.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({x: _offSet, y: 0});
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [SIZE, SPACER, isAutoPlay, date.length, offSet.value, scrollViewRef]);
  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={e => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={() => {
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newDate.map((item, index) => {
          return (
            <CustomImage
              key={index}
              index={index}
              item={item}
              x={x}
              size={SIZE}
              spacer={SPACER}
            />
          );
        })}
      </Animated.ScrollView>
      {pagination && (
        <Pagination date={date} x={x} size={SIZE} dotColor={dotColor} />
      )}
    </View>
  );
};

export default CustomImageCarousal;

const styles = StyleSheet.create({});
