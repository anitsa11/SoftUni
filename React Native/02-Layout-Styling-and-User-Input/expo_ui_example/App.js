import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Host, Column, Button } from '@expo/ui';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <Host style={{ flex: 1 }}>
      <Column spacing = {12} alignment = "center">
      <Text textStyle = {{ color: colorScheme ==='dark' ? '#ffffff' : '#000000'}}>
        Hello, world!
      </Text>
      <Button label = "Press me" onPress={ () => alert('Pressed')}></Button>
      </Column>
    </Host>
  );
}

