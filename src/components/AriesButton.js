import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Aries( ) {
    const navigation = useNavigation();

return (
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Aries" })}>
    <Image source={require('../../assets/aries.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.1, left:-70}} />
    </ TouchableOpacity>
)}