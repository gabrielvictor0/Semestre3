import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from "./src/components/screens/Navigation/Navigation"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/components/screens/Login/Login';
import {useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium} from "@expo-google-fonts/montserrat-alternates"

//criar navegação entre telas
const Stack = createNativeStackNavigator();

export default function App() {

  const [] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium
  })

  return (
    //Navegacao
    //container
    //StackNavigator
    //StackScreen

    //envolve a estrutura da navegação
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          //nome da tela
          name='Navigation'

          //componente que sera chamado
          component={Navigation}



          //titulo da tela
          options={{ title: "Navigation" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Navigation" }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
