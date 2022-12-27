import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './src/components/Header';
// import Feed from './src/components/Feed';
import Profile from './src/components/Profile';
import LandingPage from './src/pages/LandingPage';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

import HomePage from './src/pages/HomePage';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        
        <Tab.Navigator screenOptions={{
          scrollEnabled: true,
          activeTintColor: '#fff',
          inactiveTintColor: '#aaa',
          style: {
            backgroundColor: '#333',
          },
      }}>
          <Tab.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
            tabBarLabel: 'LnadingPage',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            headerShown:false,
          }}
          />
          <Tab.Screen name="HomePage" component={HomePage} options={{
            tabBarLabel: 'HomePage',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown:false,
          }} />
          <Tab.Screen name="Header" component={Header} options={{
            tabBarLabel: 'Header',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown:false,
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // statusBar:'light'
  },
});

export default App;
