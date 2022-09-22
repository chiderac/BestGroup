import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Aquarius( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "Aquarius" })}>
    <Image source={require('../../assets/aquarius.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.02,left:-170}} />
    </TouchableOpacity>
)}