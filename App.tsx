import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/router';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FloatingButton from './src/components/FloatingButton'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
        <FloatingButton />
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
