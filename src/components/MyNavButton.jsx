import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    return (
        <Pressable style={styles.buttonStyle} onClick={() => setCount(count + 1)} >
        <Text style={styles.textStyle}>{props.fightRequest}</Text>
        </Pressable>
);
 }