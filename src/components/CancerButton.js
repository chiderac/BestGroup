import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Cancer( ) {
    const navigation = useNavigation();

return (        
    <TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Cancer" })}>
    <Image source={require('../../assets/cancer.png')} style={{height:60,width:60,position:"absolute",top:Dimensions.get('window').width * 0.01,right:-170}} />
    </TouchableOpacity>
)}