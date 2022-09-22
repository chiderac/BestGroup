import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
export default function About() {
    const localImage = require('../../assets/starnight.jpg')
    return (
        <ImageBackground source={localImage }style={styles.container}>
        <View style = { styles.container } >
        <Text style={styles.title}> About Astro Daily</Text>
        <Text style={styles.text}> Astro Daily provides mystic readings each day. Find out your horoscope, compatibility, lucky number, lucky time and colour </Text>
        <StatusBar style = "auto" />
        </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40,
    },
    header: {
      color: "red",
      fontWeight: "bold",
      fontSize: 20,
    },
    subheader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50
    },
    text: {
      color: "white",
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      margin: 10
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover'
    }
    });