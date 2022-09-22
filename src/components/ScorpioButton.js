import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Scorpio( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Scorpio" })}>
    <Image source={require('../../assets/scorpio.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.48,left: -60}} />
    </TouchableOpacity>
)}