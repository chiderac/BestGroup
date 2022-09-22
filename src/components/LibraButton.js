import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Libra( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Libra" })}>
    <Image source={require('../../assets/libra.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.48,right: -60}} />
    </TouchableOpacity>
)}