import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios';

    export default function Zodiac({ route}) {
      const [data, setData] = useState([]);
      const { sign } = route.params;
    
        useEffect(() => {
        const url = `https://aztro.sameerkumar.website/?sign=${route}&day=today`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json['results']))
          .catch((error) => console.log(error));
      }, []);

      useEffect(async () => {
        const result = await axios(
          `https://aztro.sameerkumar.website/?sign=${route}&day=today`,
        );
    
        setData(result.data);
      });
    
      useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
        console.log(data);
      }, [data]);
    
      return (
        <Text>{sign}</Text>
      )};
  