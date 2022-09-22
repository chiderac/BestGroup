import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Gemini( ) {
    const navigation = useNavigation();

return (        <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Gemini" })}>
<Image source={require('../../assets/gemini.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.001,right: -135}} />
</TouchableOpacity>
)}