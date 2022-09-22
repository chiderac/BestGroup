import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Virgo( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign:  "virgo" })}>
    <Image source={require('../../assets/virgo.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.38,right:-135}} />
    </TouchableOpacity>
)}