import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, { Component } from 'react';
class App extends Component{
render(){
  const localImage = require('./assets/WallpaperDog-996754.jpg');
    return(
      <ImageBackground source={localImage }style={styles.container}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

     <View
        style = {{
          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
          width: Dimensions.get('window').width * 0.8,
          height: Dimensions.get('window').width * 0.8,
          borderWidth:5,
          borderColor:"red",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        underlayColor = '#ccc'
      >
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",bottom:Dimensions.get('window').width * 0.7}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",bottom:Dimensions.get('window').width * 0.6,right: 20}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",bottom:Dimensions.get('window').width * 0.6,left: 20}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",top:Dimensions.get('window').width * 0.7}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",top:Dimensions.get('window').width * 0.6,right: 20}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",top:Dimensions.get('window').width * 0.6,left: 20}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",bottom:Dimensions.get('window').width * 0.3,left:-20}} />
               <Image source={require('./assets/icon.png')} style={{height:50,width:50,position:"absolute",bottom:Dimensions.get('window').width * 0.3,right:-20}} />
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
      fontSize: 60,
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
  },
  text: {
      color: "black",
      fontSize: 14,
  }

});
