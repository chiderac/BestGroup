import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Capricorn( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "Capricorn" })}>
    <Image source={require('../../assets/capricorn.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.2,left:-170}} />
    </TouchableOpacity>
)}