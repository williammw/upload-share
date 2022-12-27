import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Feed from './src/Feed';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>IG Header</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Text style={styles.profileText}>IG cProfile</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  feed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedImage: {
    width: 200,
    height: 200,
  },
  feedText: {
    fontSize: 20,
  },
  profile: {
    height: 60,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
