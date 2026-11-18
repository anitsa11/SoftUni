import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import TopBar from '../components/topbar';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
    <View>
      <TopBar/>
    </View>
    </SafeAreaProvider>
  );
}

