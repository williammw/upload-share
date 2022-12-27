import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Welcome to Instagram</Text>
        <Text style={styles.description}>
          Connect with friends, share what you're up to, or see what's new from others all over the world.
        </Text>
        <Button title="Sign up" onPress={() => {}} style={styles.button} />
        <Text style={styles.footer}>
          By signing up, you agree to our Terms & Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#3897f0',
    borderRadius: 20,
    padding: 10,
    width: '60%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  loggedInContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructionsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  exploreButton: {
    backgroundColor: '#3897f0',
    borderRadius: 20,
    padding: 10,
    width: '60%',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});



export default LandingPage;