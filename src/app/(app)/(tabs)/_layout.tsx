import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Libros',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color as string}
            />
          ),
        }}
      />
    </Tabs>
  );
}

