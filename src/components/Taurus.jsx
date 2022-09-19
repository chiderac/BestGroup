import React, { Component } from 'react';
import {Text, StyleSheet, View, ImageBackground } from 'react-native';
import Aries from './Aries';

class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=taurus&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }
    render() {
        const localImage = require('../../assets/starnight.jpg');
        return (
        <ImageBackground styles={styles.container} source={localImage}>
            <Text style={styles.title}>Taurus</Text>
                <Text style={styles.text1}>{this.state.json.current_date} </Text>
                <Text style={styles.text1}>  Description: {this.state.json.description} </Text>
            <View style={styles.box1}>
                <Text style={styles.text}>Compatibility: {this.state.json.compatibility} </Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>Lucky Number: {this.state.json.lucky_number}</Text> 
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>Lucky Time: {this.state.json.lucky_time} </Text> 
            </View>
            <View style={styles.box4}>
                <Text style={styles.text}> Color: {this.state.json.color} </Text>
            </View>
            <View style={styles.box5}>
                <Text style={styles.text}>   Date Range: {this.state.json.date_range} </Text>
            </View>
            <View style={styles.box6}>
                <Text style={styles.text}>  Mood: {this.state.json.mood} </Text>
            </View>
          </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      color: 'white'
    },
    text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: 'center',

    },
    text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: 'center',
    margin: 10

    },
    box1: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor:'white',
        margin: 10,
        paddingTop: 30,
        paddingBottom: 25
        
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor:'white',
        margin: 10,
        padding: 25,
        position: 'relativegit '
    },
    box3: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor:'white',
        margin: 10,
        padding: 25
    },
    box4: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor:'white',
        margin: 10,
        padding: 25
    },
    box5: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor:'white',
        margin: 10,
        padding: 25
    },
    box6: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor:'white',
        margin: 10,
        padding: 25
    },


    
    });
export default Aztro;