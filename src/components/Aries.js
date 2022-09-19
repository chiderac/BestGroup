import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

    export default Aries = () => {
      const [isLoading, setIsLoading] = useState(true);
      const [data, setData] = useState([]);
    
        useEffect(() => {
        const url = "https://aztro.sameerkumar.website/?sign=aries&day=today";
        fetch(url)
          .then((response) => response.json())
          .then((json) => setData(json['results']))
          .catch((error) => console.log(error));
      }, []);
    
      useEffect(() => {
        if (data.length !== 0) {
          setIsLoading(false);
        }
        console.log(data);
      }, [data]);
    
      return (
        <View style={{ flex: 1, padding: 24 }}>
           {isLoading ? (
      <Text>Loading...</Text>
    ) : (
        <Text>
          {data.message}
        </Text> 
        
    )}
        </View>
      );
    }


  