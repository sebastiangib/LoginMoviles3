import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/styles/styles';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{title:"Inicio de Sesión"}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Pantalla Principal"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


