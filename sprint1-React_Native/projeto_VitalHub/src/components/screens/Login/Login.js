import { Button, Text } from "react-native"
import { Container, ContainerGoogle, ContainerInputLogin, ContentAccount } from "../../Container/Style"
import { Logo } from "../../Logo/Style"
import { ButtonTitle, ButtonTitleGoogle, TextAccount, TextLink, Title } from "../../Title/Style"
import { InputLogin } from "../../Input/Style"
import { LinkMedium } from "../../Links/Style"
import { ButtonEntrar, ButtonGoogle } from "../../Button/Style"
import { Image } from "react-native"

export const Login = ({navigation}) => {


    return (
        <Container>

            <Logo source={require("../../../assets/img/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <ContainerInputLogin>
                <InputLogin placeholder="Usuário ou e-mail" />
                <InputLogin placeholder="Senha" />


                <LinkMedium onPress={() => navigation.navigate('RecoverPassword')}>Esqueceu sua senha?</LinkMedium>
            </ContainerInputLogin>

            
            <ButtonEntrar>
                <ButtonTitle> ENTRAR </ButtonTitle>
            </ButtonEntrar>
            
            <ButtonGoogle>
                <ContainerGoogle>

                <Image source={require("../../../assets/img/GOOGLE.png")}/>
                <ButtonTitleGoogle>ENTRAR COM GOOGLE</ButtonTitleGoogle>

                </ContainerGoogle>
            </ButtonGoogle>
           
            <ContentAccount>
                <TextAccount>Não tem conta? <TextLink onPress={() => navigation.navigate('Register')}>Crie uma conta agora!</TextLink> </TextAccount>
            </ContentAccount>

        </Container>
    )
}