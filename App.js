import HomePage from './src/screens/HomePage'
import Login from './src/screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
  <Tab.Navigator >
      {/* <Stack.Navigator> */}
        <Stack.Screen  name="Home" component={HomePage} options={{
                    // tabBarIcon: () => (<Image source={require("/Users/pollylinkogle-gabriel/Desktop/CFG Masters/cfg-polly-luisa-project/assets/home.png")} style={{width: 20, height: 20}} />)
                }}/>
        <Stack.Screen  name="Login" component={Login} options={{
                    // tabBarIcon: () => (<Image source={require("/Users/pollylinkogle-gabriel/Desktop/CFG Masters/cfg-polly-luisa-project/assets/home.png")} style={{width: 20, height: 20}} />)
                }}/>

      {/* </Stack.Navigator> */}
    </Tab.Navigator>
    </NavigationContainer>
  );
}