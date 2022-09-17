import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, { Component } from 'react';
class App extends Component{
render(){
  const localImage = require('./assets/starnight.jpg');
    return(
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
               <Image source={require('./assets/aries.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.8}} />
               <Image source={require('./assets/aqaurius.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.7,right: 50}} />
               <Image source={require('./assets/cancer.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.5,right: 0}} />
               <Image source={require('./assets/capricorn.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.5,left: 0}} />
               <Image source={require('./assets/gemini.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.7,left: 50}} />
               <Image source={require('./assets/leo.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.7}} />
               <Image source={require('./assets/libra.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.6,right: 20}} />
               <Image source={require('./assets/taurus.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.6,left: 20}} />
               <Image source={require('./assets/virgo.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.3,left:-20}} />
               <Image source={require('./assets/scorpio.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.3,right:-20}} />
               
                      <Text style={styles.title}>Astrology</Text>
                      <Text style={styles.subheader}>Click on your star sign to get your daily horoscope</Text>
      </View>
        </View>
        </ImageBackground>
    )
}
}
export default App;

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