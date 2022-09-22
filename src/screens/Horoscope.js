import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Zodiac({ route }) {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { sign } = route.params;

  const fetchData = async () => {

    fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
      .then(response => { return response.json(); })
      .then(responseData => { return responseData; })
      .then(data => { setData(data); })

      .catch(err => {
        console.log("fetch error" + err);
      }).finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData();
    if (data.length !== 0) {
      setIsLoading(false);
    }
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
                <Text style={styles.text2}>Compatibility: {data.compatibility} </Text>
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

                <Text style={styles.text2}>Lucky Time: {data.lucky_time} </Text>
              </View>
            </ImageBackground>


            <ImageBackground
              style={styles.Image1}
              source={require('../../assets/glitter-star.png')}>
              <View style={styles.textView}>

                <Text style={styles.text2}> Color: {data.color} </Text>
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
  )
};

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
    fontSize: 11,
    textAlign: 'center',
    paddingTop: 65,
    padding: 64
  },
  text2: {
    color: "white",
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 70,
    padding: 55

  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
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
    width: 195,
    height: 195,
  }



});