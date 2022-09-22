
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React, { Component, useState} from 'react';
import Aries from '../components/AriesButton'
import Taurus from '../components/TaurusButton'
import Gemini from '../components/GeminiButton'
import Cancer from '../components/CancerButton'
import Leo from '../components/LeoButton'
import Virgo from '../components/VirgoButton'
import Libra from '../components/LibraButton'
import Scorpio from '../components/ScorpioButton'
import Sagittarius from '../components/SagittariusButton'
import Capricorn from '../components/CapricornButton'
import Aquarius from '../components/AquariusButton'
import Pisces from '../components/PiscesButton'

import MyButton from '../components/MyButton'

export default function HomePage({ navigation }) {
    const localImage = require('../../assets/starnight.jpg')
return (
    <ImageBackground source={localImage }style={styles.container}>

    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
 <View
    style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: Dimensions.get('window').width * 0.8,
      height: Dimensions.get('window').width * 0.8,
      borderWidth:5,
      borderColor:"transparent",
      justifyContent: 'center',
      alignItems: 'center'
    }}
    underlayColor = '#ccc'
  >

    <Aries />

    <Taurus />

    <Gemini />

    <Cancer />

    <Leo />

    <Virgo />

    <Libra />

    <Scorpio />

    <Sagittarius />

    <Capricorn />

    <Aquarius />

    <Pisces />

                  <Text style={styles.title}>Astro Daily</Text>
                  <Text style={styles.subheader}>Click on your star sign to get your daily horoscope</Text>
                  <MyButton title="About Us" onPress={() => navigation.navigate('About')} />
                  </View>
    </View>
    </ImageBackground>

// export default function App() {
//   const localImage = require('./assets/WallpaperDog-996754.jpg');
//   return (
//     <ImageBackground source={localImage }style={styles.container}>
//       <Text style={styles.title}>Astrology</Text>
//       <Text style={styles.subheader}>Click on your star sign to get your daily horoscope</Text>
//       <StatusBar style="auto" />
//     </ImageBackground>
//   );
// }
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
  fontSize: 38,
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
  color: "black",
  fontSize: 14,
}

});