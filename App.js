import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
    source={{uri: 'https://i.pinimg.com/564x/64/31/35/643135e60d9de9543ade17d3b96fff8a.jpg'}}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.text}>Horoscope App Title</Text>
      <StatusBar style="auto" />
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  text: {
    color: "white",
    fontSize: 33,
    fontFamily: "SFUIDisplay-Bold"
  }
});
