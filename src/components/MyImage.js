import React, { useState } from 'react';
import { View, Image, StyleSheet, PinchGestureHandler, Animated } from 'react-native';
import { State } from 'react-native-gesture-handler';

const MyImage = ({ imageUrl }) => {
  console.log('FUCKFUCKFUCK', imageUrl);
  const [scale, setScale] = useState(new Animated.Value(1));

  const handlePinch = Animated.event([{ scale: scale }], {
    useNativeDriver: true,
  });

  return (
    // <PinchGestureHandler onGestureEvent={handlePinch}>
      <Animated.View style={[styles.imageContainer, { transform: [{ scale }] }]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </Animated.View>
    // </PinchGestureHandler>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
    imageContainer: {
    width: 200,
    height: 300,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 15,
  },
  likes: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  comments: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  commentUsername: {
    fontWeight: 'bold',
  },
  
});

export default MyImage;