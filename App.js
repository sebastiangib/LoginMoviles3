import { StyleSheet, Text, View } from 'react-native';
import { styles } from './assets/styles/styles';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

