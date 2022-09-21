import HomePage from './src/screens/HomePage';
import Login from './src/screens/Login';
import Horoscope from './src/screens/Horoscope';
import Aztro from './src/screens/ZodiacClass';
import Zodiac from './src/screens/ZodiacFunctional'
import "react-native-gesture-handler"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Image } from 'react-native';
import React from 'react';

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
        <Stack.Screen style={styles.screen} name="Login" component={Login} 
          // options={{
          //             tabBarIcon: () => (<Image source={require("./assets/star.png")} style={{width: 20, height: 20}} />)}}
                    />

        <Stack.Screen style={styles.screen} name="Horoscope" component={Horoscope} options={{
                    tabBarIcon: () => (<Image source={require("./assets/star.png")} style={{width: 20, height: 20}} />)
                }}/>
         <Stack.Screen style={styles.screen} name="Taurus" component={Aztro} options={{
                    tabBarIcon: () => (<Image source={require("./assets/star.png")} style={{width: 20, height: 20}} />)
                }}/>

          <Stack.Screen style={styles.screen} name="Zodiac" component={Zodiac} options={{
                    tabBarIcon: () => (<Image source={require("./assets/star.png")} style={{width: 20, height: 20}} />)
                }}/>
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
