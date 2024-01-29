import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';

export default function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count - 1 )
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>

      <Text style={styles.matrix}>Escolha a pílula</Text>

      <Text style={styles.contador}>CONTADOR: {count}</Text>

      <View style={styles.container_btn}>

      <TouchableOpacity style={styles.btn_increment} onPress={increment}>
        <Text style={styles.increment}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn_decrement} onPress={decrement}>
        <Text style={styles.decrement}>Decrementar</Text>
      </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  
  btn_decrement: {
    width: "40%",
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#FF0000"
  },
  btn_increment: {
    width: "40%",
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#0087FF"
  },
  container_btn: {
    flexDirection: "row",
    gap: 8
  },
  contador: {
    fontSize: 30
  },
  increment: {
    color: "white",
    fontWeight: "bold"
  },
  decrement: {
    color: "white",
    fontWeight: "bold"
  },
  matrix: {
    fontSize: 20
  }
});
