import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Container, ContainerBtn, ContainerPilulas } from './src/components/Container/Container';
import { Button_Blue, Button_Red } from './src/components/Button/Button';
import { TextButton, TextStyled, Title } from './src/components/Title/Title';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { ImgMatrix } from './src/components/Image/Image';


export default function App() {

  const [] = useFonts({
    Poppins_500Medium,
  });

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>

      <ImgMatrix source={require("./src/assets/img/Especial-Matrix-4.png")}>

      </ImgMatrix>

      <ContainerPilulas>

        <TextStyled>Escolha a pílula</TextStyled>

        <Title>CONTADOR: {count}</Title>

        <ContainerBtn>

          <Button_Red  onPress={decrement}>
            <TextButton> -</TextButton>
          </Button_Red>

          <Button_Blue onPress={increment} >
            <TextButton> + </TextButton>
          </Button_Blue>

        </ContainerBtn>
      </ContainerPilulas>

      <StatusBar style="auto" />
    </Container>
  );
}
