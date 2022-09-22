import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Sagittarius( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Sagittarius" })}>
    <Image source={require('../../assets/sagittarius.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.38,left:-135}} />
    </TouchableOpacity>
)}