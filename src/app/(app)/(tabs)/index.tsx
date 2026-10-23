import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { LIBROS } from '../../../data/libros';

export default function LibrosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Libros</Text>
      <FlatList
        data={LIBROS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            accessibilityRole="button"
            onPress={() =>
              router.push({ pathname: '/libro/[id]', params: { id: item.id } })
            }
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
          >
            <View>
              <Text style={styles.title}>{item.titulo}</Text>
              <Text style={styles.author}>{item.autor}</Text>
            </View>
            <Text style={styles.year}>{item.anio}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    fontSize: 26,
    fontWeight: '700',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  rowPressed: {
    opacity: 0.65,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  author: {
    marginTop: 4,
    color: '#6b7280',
  },
  year: {
    marginLeft: 12,
    color: '#6b7280',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#d1d5db',
  },
});
