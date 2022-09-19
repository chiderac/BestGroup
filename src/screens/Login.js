import {
  StyleSheet,
  Text,
  View,
  TextInput, 
  ImageBackground
  } from 'react-native';
import moment from 'moment';
import React, { useState} from 'react';
import DatePicker from 'react-native-datepicker';
import MyButton from '../components/MyButton';

export default function Login() {
    const [date, setDate] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const localImage = require('/Users/pollylinkogle-gabriel/Desktop/CFG Masters/BestGroup/assets/starnight.jpg');
    return (
<ImageBackground source={localImage }style={styles.container}>
<Text style={styles.Text}> Login </Text> 
<TextInput
    style={styles.TextInput}
    placeholder="Username"
    placeholderTextColor="#003f5c"
    value={username}
    onChangeText={setUsername}
></TextInput>

  <TextInput
    style={styles.TextInput}
    placeholder="Password"
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={setPassword}
    value={password}></TextInput>

  <DatePicker
    style={styles.datePickerStyle}
    date={date} 
    mode="date"
    placeholder="Please Enter Your Date of Birth" 
    format="DD/MM/YYYY"
    minDate="01-01-1910"
    maxDate={moment()}
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
        dateInput:{
          color: "black"
        },
        dateText:{
          color: 'black',
          justifyContent: 'flex-start'
        },
        placeholderText: {
            color: "#003f5c",
            fontSize: 17
        }
      }}
    onDateChange={(date) => {
    setDate(date); 
  }}/>
    <MyButton style={styles.button} fightRequest="Submit" onPress={() =>  AsyncStorage.setItem('@storage_Key', value)} >
    </MyButton>
    </ImageBackground>
    )} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Helvetica',
    marginBottom: 10
  },
  TextInput: {
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  paddingVertical: 15,
  width: 250,
  elevation: 3,
  backgroundColor: 'white',
  margin: 10,
  fontSize: 17,
  },
  textStyle: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'grey'
    },

    button: {
      margin: 20,
      color: 'black'
    },
    datePickerStyle: {
      width: 320,
      margin: 20,
      backgroundColor: 'white',
      color: 'black',
 }
});