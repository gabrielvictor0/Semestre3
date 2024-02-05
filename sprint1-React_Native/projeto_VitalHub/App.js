import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   //Navegacao
    //container
    //StackNavigator
    //StackScreen

    //envolve a estrutura da navegação
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        //nome da tela
        name='Navegacao'

        //componente que sera chamado
        component={Navegacao}
        //titulo da tela
        options={{title: "Navegacao"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
