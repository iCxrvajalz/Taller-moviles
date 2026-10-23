import { StyleSheet, Text, View } from 'react-native';

export default function AjustesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Text>Configura tus preferencias de Biblioteca.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});
