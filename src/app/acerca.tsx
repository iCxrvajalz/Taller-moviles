import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function AcercaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>
      <Text style={styles.description}>
        Una aplicación para explorar libros y guardar tus favoritos.
      </Text>
      <Button title="Cerrar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
