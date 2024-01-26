import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Se quiser sim mano </Text>
      <Image style={styles.image} source={require('./src/assets/placar.png')}/>
      <TextInput 
      style={styles.input}
      defaultValue='Anota ai...'/>

      <TouchableOpacity style={styles.bnt}>
        <Text> CLICK</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text:{
    fontSize: 50,
    textAlign: 'center'
  },
  input: {
    marginTop:20,
    height: 60,
    width: `90%`,
    borderWidth: 2,
    backgroundColor:'white',
    borderColor: "black",
    padding: 10
  },
  image:{
    width:'100%',
    resizeMode: 'contain'
  },
  bnt:{
    width: '50%',
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#14D9F4",
    marginTop: 100,
    paddingLeft: 70


  }
});


