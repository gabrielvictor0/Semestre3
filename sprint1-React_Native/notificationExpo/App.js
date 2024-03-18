import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Notifications from "expo-notifications"

//solicitar as permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//definir como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //mostra o alerta quando a notificação for recebida
    shouldShowAlert: true,

    //configura som ao receber notificação
    shouldPlaySound: false,

    //configura número de notificações no ícone do app
    shouldSetBadge: false

  })
})

export default function App() {
  //função para lidar com a chamada da notificação
  const handleCallNotifications = async () => {
    //obtem o status das permissões 
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão para notificações
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas");
      return;
    }

    //agendar uma notificação para ser exibida após 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World",
        body: "Criando uma POC para implementar expo notifications"
      },
      trigger: null
    })
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleCallNotifications()}>
        <Text>Clique aqui para envio da notificação</Text>
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
  button: {
    height: 80,
    width: "70%",
    backgroundColor: "#F9F262",
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    elevation: 8
  }
});
