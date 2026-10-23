import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Button title="Acerca de" onPress={() => router.push('/acerca')} />
      <Button
        title="Cerrar sesión"
        onPress={() => router.replace('/login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '700',
  },
});
