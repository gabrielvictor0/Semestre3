import {  } from 'expo-status-bar';
import {StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (

    <SafeAreaView>

      <StatusBar/>

      <Person name={"Gabriel"} age={"17"} />

      
      <Person name={"Rubens Estourado"} age={"19"} />
      

    </SafeAreaView>
  );
}

