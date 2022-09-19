
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, { Component } from 'react';

export default function HomePage() {
    const localImage = require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/starnight.jpg');
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
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/aries.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.7, left:75}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/taurus.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.7, right: 75}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/gemini.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.6,right: 0}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/cancer.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.4,right:-30}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/leo.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.4,right:-30}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/virgo.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.6,right:0}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/libra.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.7,right: 75}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/scorpio.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.7,left: 75}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/sagittarius.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.6,left: 0}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/capricorn.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.4,left: -30}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/aquarius.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.4,left:-30}} />
           <Image source={require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/pisces.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.6,left: 0}} />
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