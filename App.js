import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import QuestionnaireScreen from './screens/QuestionnaireScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';

export default function App() {
  const [screen, setScreen] = useState('questionnaire');
  const [filters, setFilters] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === 'questionnaire' && (
        <QuestionnaireScreen
          onSubmit={(answers) => {
            setFilters(answers);
            setScreen('results');
          }}
        />
      )}
      {screen === 'results' && (
        <SearchResultsScreen
          filters={filters}
          onBack={() => setScreen('questionnaire')}
        />
      )}
    </SafeAreaView>
  );
}
