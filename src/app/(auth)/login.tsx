import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia sesión</Text>
      <Button title="Entrar" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    color: '#1f2937',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
});
