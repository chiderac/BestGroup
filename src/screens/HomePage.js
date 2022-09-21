
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React, { Component, useState} from 'react';


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


        <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "aries" })}>
           <Image source={require('../../assets/aries.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.1, left:-70}} />
           </ TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "taurus" })}>
           <Image source={require('../../assets/taurus.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.1, right: -70}} />
        </ TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "gemini" })}>
           <Image source={require('../../assets/gemini.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.001,right: -135}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "cancer" })}>
           <Image source={require('../../assets/cancer.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.01,right:-170}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "leo" })}>
           <Image source={require('../../assets/leo.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.2,right:-170}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "virgo" })}>
           <Image source={require('../../assets/virgo.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.38,right:-135}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "libra" })}>
           <Image source={require('../../assets/libra.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.4,right: -60}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "scorpio" })}>
           <Image source={require('../../assets/scorpio.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.4,left: -60}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "sagittarius" })}>
           <Image source={require('../../assets/sagittarius.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.38,left:-135}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "capricorn" })}>
           <Image source={require('../../assets/capricorn.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.2,left:-170}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "aquarius" })}>
           <Image source={require('../../assets/aquarius.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.02,left:-170}} />
           </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "pisces" })}>
            <Image source={require('../../assets/pisces.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.001,left: -135}} />
            </TouchableOpacity>  

                  <Text style={styles.title}>Astrology</Text>
                  <Text style={styles.subheader}>Click on your star sign to get your daily horoscope</Text>
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
  color: "black",
  fontSize: 14,
}

});