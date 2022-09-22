import HomePage from './src/screens/HomePage';
import Horoscope from './src/screens/Horoscope';
import "react-native-gesture-handler"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Image } from 'react-native';
import React from 'react';
import About from './src/screens/AboutUs'


// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

  export default function App() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
  {/* <Tab.Navigator> */}
      <Stack.Navigator style={styles.container}>
 <Stack.Screen style={styles.screen} name="Home" component={HomePage} 
//  options={{ tabBarIcon: () => (<Image source={require("./assets/star.png")} style={{width: 20, height: 20}} />) }}
/>
        <Stack.Screen style={styles.screen} name="Horoscope" component={Horoscope}/>
        <Stack.Screen style={styles.screen} name="About" component={About}/>
      </Stack.Navigator>
    {/* </Tab.Navigator> */}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  screen: {
    color: 'black'
  }
});
