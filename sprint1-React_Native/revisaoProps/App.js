import { } from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Person from './src/components/Person/Person';


export default function App() {
  const peopleList = [
    { id: '1', name: 'Gabriel', age: 18 },
    { id: '2', name: 'Rubens', age: 24 },
    { id: '3', name: 'Wandinho', age: 27 },
    { id: '4', name: 'Edu', age: 24 }

  ]
  return (

    <SafeAreaView>

      <StatusBar />
      {/* Usando flatlist */}
      <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Person name={item.name} age={item.age}/>
      )}
      />

    </SafeAreaView>
  );
}

