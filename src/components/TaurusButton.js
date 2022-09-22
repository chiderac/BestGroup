import React from 'react';
import { Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

  export default function Taurus( ) {
    const navigation = useNavigation();

return (
<TouchableOpacity onPress={() => navigation.navigate('Horoscope', { sign: "Taurus" })}>
           <Image source={require('../../assets/taurus.png')} style={{height:60,width:60,position:"absolute",bottom:Dimensions.get('window').width * 0.1, right: -70}} />
        </ TouchableOpacity>
)}