import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Pisces( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "Pisces" })}>
    <Image source={require('../../assets/pisces.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.001,left: -135}} />
    </TouchableOpacity>  
)}