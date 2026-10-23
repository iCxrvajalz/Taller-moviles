import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Biblioteca</Text>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eef2ff',
  },
  brand: {
    marginTop: 48,
    marginBottom: 32,
    color: '#1e3a8a',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
});
