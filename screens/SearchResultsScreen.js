import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

function mockSearch(filters) {
  const base = [
    { id: 1, title: 'Peugeot 208 - Citadine - Essence', price: 12000, seats: 5 },
    { id: 2, title: 'Renault Clio - Citadine - Diesel', price: 9500, seats: 5 },
    { id: 3, title: 'Toyota Corolla - Berline - Hybride', price: 18000, seats: 5 },
    { id: 4, title: 'Kia Niro - SUV - Hybride', price: 22000, seats: 5 },
    { id: 5, title: 'Tesla Model 3 - Berline - Électrique', price: 35000, seats: 5 },
  ];
  if (!filters) return base;
  return base.filter((v) => {
    if (filters.budget && parseInt(filters.budget) < v.price) return false;
    if (filters.body && !v.title.includes(filters.body)) return false;
    if (filters.fuel && !v.title.includes(filters.fuel)) return false;
    return true;
  });
}

export default function SearchResultsScreen({ filters, onBack }) {
  const results = mockSearch(filters);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Button title="← Retour" onPress={onBack} />
        <Text style={styles.title}>Résultats</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {results.map((r) => (
          <View key={r.id} style={styles.card}>
            <Text style={{ fontWeight: '700' }}>{r.title}</Text>
            <Text>Prix : €{r.price}</Text>
            <Text>Places : {r.seats}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  title: { flex: 1, textAlign: 'center', fontWeight: '700', fontSize: 18 },
  card: { padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginTop: 10 },
});