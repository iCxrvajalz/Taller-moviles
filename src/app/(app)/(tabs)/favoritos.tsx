import { StyleSheet, Text, View } from 'react-native';

export default function FavoritosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <Text>Tus libros favoritos aparecerán aquí.</Text>
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
