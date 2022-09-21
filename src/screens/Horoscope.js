import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import axios from "axios";


    export default function Zodiac({ route }) {

      const [isLoading, setIsLoading] = useState(true);
      const [data, setData] = useState([]);
      const { sign } = route.params;

//       function getHoroscopes() {
//     axios.get(`https://aztro.sameerkumar.website/?sign=${route}&day=today`)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);

//     })
//     .finally(() => setIsLoading(false));
// }

// useEffect(()=>{
//     getHoroscopes();
// },[])

  useEffect(() => {
    const url = `https://aztro.sameerkumar.website/?sign=${route}&day=today`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

          
      return (

        <ImageBackground styles={styles.container} source={require('../../assets/starnight.jpg')}>
          {isLoading ? (
            <Text style={styles.title}>Loading... {sign}</Text>
          ) : ( 
        
              <View >
                <Text style={styles.title}>{sign}</Text>
                <Text style={styles.text1}> {data.date_range} </Text>
                <Text style={styles.text1}>Today: {data.current_date}</Text>
                    <Text style={styles.text1}>  Description: {data.description} </Text>
    
            <View style={styles.here1}>
    
                <ImageBackground
            style={styles.Image1}
            source={require('../../assets/glitter-star.png')}>
            <View style={styles.textView}>
                    <Text style={styles.text}>Compatibility: {data.compatibility} </Text>
                    </View>
          </ImageBackground>
    
          <ImageBackground
            style={styles.Image1}
            source={require('../../assets/glitter-star.png')}>
            <View style={styles.textView}>
                    <Text style={styles.text}>Lucky Number: {data.lucky_number}</Text> 
                    </View>
          </ImageBackground>
    
                </View>
    
    
        <View style={styles.here2}>
        <ImageBackground
            style={styles.Image1}
            source={require('../../assets/glitter-star.png')}>
            <View style={styles.textView}>
    
                <Text style={styles.text}>Lucky Time: {data.lucky_time} </Text> 
            </View>
          </ImageBackground>
    
    
            <ImageBackground
            style={styles.Image1}
            source={require('../../assets/glitter-star.png')}>
            <View style={styles.textView}>
    
                    <Text style={styles.text}> Color: {data.color} </Text>
                    </View>
          </ImageBackground>
                </View>
    
    
    
    <View style={styles.here3}>
    
    
        <ImageBackground
            style={styles.Image1}
            source={require('../../assets/glitter-star.png')}>
            <View style={styles.textView}>
                    <Text style={styles.text}>  Mood: {data.mood} </Text>
            </View>
          </ImageBackground>
          </View>
          </View>
         
         )}
              </ImageBackground>
      )};
            
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: null,
            height: null,
          
        },
        title: {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 40,
          color: 'white'
        },
        text: {
        color: "white",
        fontSize: 10,
        textAlign: 'center',
        paddingTop: 70,
        padding: 55
    
        },
        text1: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10,
        textAlign: 'center',
        margin: 10
    
        },
        here1: {
            flexDirection: 'row',
            justifyContent: "center"
        },
        here2: {
            flexDirection: 'row',
            justifyContent: "center",
            margin: -20
    
        },
        here3: {
            flexDirection: 'row',
            justifyContent: "center",
            margin: -24
        },
        Image1: {
            width: 185,
            height: 185,
        }
    
    
        
        });
