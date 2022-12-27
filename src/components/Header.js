import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IT dog media</Text>
      <Image
        source={{
          uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
        }}
        style={styles.logo}
      />
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/women/3.jpg',
        }}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Header;
