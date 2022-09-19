import { StyleSheet, Text, Pressable} from 'react-native';


export default function MyButton(props) {

  return (
      <Pressable style={styles.buttonStyle} onPress={props.onPress} >
          <Text style={styles.textStyle}>{props.fightRequest}</Text>
      </Pressable>
        
    );
}

const styles = StyleSheet.create({
  buttonStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'white',
  borderWidth: 1,
  padding: 10
  },
  textStyle: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: 'white'
    }
  });