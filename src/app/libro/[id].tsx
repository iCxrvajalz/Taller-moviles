import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { LIBROS } from '../../data/libros';

export default function LibroDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libro = LIBROS.find((item) => item.id === id);

  if (!libro) {
    return (
      <>
        <Stack.Screen options={{ title: 'Libro no encontrado' }} />
        <View style={styles.container}>
          <Text style={styles.title}>Libro no encontrado</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: libro.titulo }} />
      <View style={styles.container}>
        <Text style={styles.title}>{libro.titulo}</Text>
        <Text style={styles.detail}>Autor: {libro.autor}</Text>
        <Text style={styles.detail}>Año: {libro.anio}</Text>
      </View>
    </>
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
    fontSize: 26,
    fontWeight: '700',
  },
  detail: {
    fontSize: 18,
  },
});
