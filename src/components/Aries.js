import React, { useState, useEffect } from "react";
import {Box, FlatList, Center, NativeBaseProvider, Text} from "native-base";
import MyButton from './MyButton'
export default function Aries() {

    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://aztro.sameerkumar.website/?sign=aries&day=today');
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.title}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {visible && <MyButton onPress={() => fetchData()}>Press</MyButton>} 
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </Center>
    </NativeBaseProvider>
  );
}