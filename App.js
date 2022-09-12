import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';


export default function App() {
  const localImage = require('./assets/WallpaperDog-996754.jpg');
  return (
    <ImageBackground source={localImage }style={styles.container}>
      <Text style={styles.title}>Astrology</Text>
      <Text style={styles.subheader}>Click on your star sign to get your daily horoscope</Text>
      <StatusBar style="auto" />
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
      fontSize: 60,
  },
  header: {
      color: "black",
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
