import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Option = ({ label, chosen, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.option, chosen && styles.chosenOption]}>
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

export default function QuestionnaireScreen({ onSubmit }) {
  const [budget, setBudget] = useState('');
  const [body, setBody] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [transmission, setTransmission] = useState(null);
  const [seats, setSeats] = useState('5');
  const [mustHaves, setMustHaves] = useState('');

  const submit = () => {
    const answers = { budget, body, fuel, transmission, seats, mustHaves };
    onSubmit(answers);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vroumly — Questionnaire</Text>

      <Text style={styles.label}>Budget maximum (€)</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={budget} onChangeText={setBudget} placeholder="ex. 15000" />

      <Text style={styles.label}>Type de carrosserie</Text>
      <View style={styles.row}>
        {['Citadine', 'Berline', 'SUV', 'Break', 'Monospace'].map((x) => (
          <Option key={x} label={x} chosen={body === x} onPress={() => setBody(x)} />
        ))}
      </View>

      <Text style={styles.label}>Carburant</Text>
      <View style={styles.row}>
        {['Essence', 'Diesel', 'Hybride', 'Électrique'].map((x) => (
          <Option key={x} label={x} chosen={fuel === x} onPress={() => setFuel(x)} />
        ))}
      </View>

      <Text style={styles.label}>Boîte de vitesses</Text>
      <View style={styles.row}>
        {['Manuelle', 'Automatique'].map((x) => (
          <Option key={x} label={x} chosen={transmission === x} onPress={() => setTransmission(x)} />
        ))}
      </View>

      <Text style={styles.label}>Nombre de places</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={seats} onChangeText={setSeats} />

      <Text style={styles.label}>Options importantes</Text>
      <TextInput style={[styles.input, { height: 100 }]} multiline value={mustHaves} onChangeText={setMustHaves} />

      <View style={{ height: 16 }} />
      <Button title="Rechercher des véhicules correspondants" onPress={submit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  label: { marginTop: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginTop: 6 },
  row: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  option: { padding: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, marginRight: 8, marginBottom: 8 },
  chosenOption: { backgroundColor: '#e6f0ff', borderColor: '#5590ff' },
  optionText: { fontSize: 14 },
});
