import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const CustomImage = ({item, x, index, size, spacer}) => {
  const [aspectRation, setAspectRation] = useState(1);
  useLayoutEffect(() => {
    if (item.image) {
      const {width, height} = Image.resolveAssetSource(item.image);
      setAspectRation(width / height);
    }
  }, [item.image]);
  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8],
    );
    return {
      transform: [{scale}],
    };
  });
  if (!item.image) {
    return <View style={{width: spacer}} key={index} />;
  }
  return (
    <View style={{width: size}} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={[styles.image, {aspectRatio: aspectRation}]}
        />
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#D4D4D4',
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: undefined,
  },
});
