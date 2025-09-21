import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/router';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FloatingButton from './src/components/FloatingButton'
import { useState } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(true)
  const onPress = () => setIsVisible(!isVisible)
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
        { isVisible && <FloatingButton onPress={onPress} /> }
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
