import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./src/assets/vaidebet.png")}/>

      <View style={styles.viewEmail}>
      <Text>E-mail:</Text>
      <TextInput  defaultValue='Digite seu e-mail' style={styles.email}></TextInput>
      </View>

      <View style={styles.viewSenha}>
      <Text>Senha:</Text>
      <TextInput defaultValue='Digite sua senha' style={styles.senha}></TextInput>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt_logar}>LOGIN</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    resizeMode: "contain",
    width:"80%"
  },
  email:{
    paddingLeft:5,
    marginTop: 10,
    height: 40,
    width:"70%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  
  },
  senha:{
    paddingLeft:5,
    marginTop: 8,
    height: 40,
    width:"70%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  },
  btn:{
    marginTop:55,
    borderWidth:1,
    borderCOlor: "black",
    width: "40%",
    height: 35,
    paddingTop: 8,
    borderRadius: 8,
    backgroundColor: "#F9C736"
  },
  txt_logar:{
    alignSelf:"center",
  },
  viewEmail:{
    marginTop: 30,
    width: "100%",
    marginLeft: "30%"
  },
  viewSenha: {
    marginTop: 15,
    width: "100%",
    marginLeft: "30%"
  }

});
