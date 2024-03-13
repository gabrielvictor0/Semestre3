
import { Container, ContainerGoogle, ContainerInputLogin, ContentAccount } from "../../Container/Style"
import { Logo } from "../../Logo/Style"
import { ButtonTitle, ButtonTitleGoogle, TextAccount, TextLink, Title } from "../../Title/Style"
import { InputDefault } from "../../Input/Style"
import { LinkMedium } from "../../Links/Style"
import { ButtonDefault, ButtonGoogle } from "../../Button/Style"
import { Image } from "react-native"

export const Login = ({ navigation }) => {

    async function Login() {
        navigation.replace("Main")
    }

    return (
        <Container>

            <Logo source={require("../../../assets/img/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <ContainerInputLogin>
                <InputDefault placeholder="Usuário ou e-mail" />
                <InputDefault placeholder="Senha" />


                <LinkMedium onPress={() => navigation.navigate('RecoverPassword')}>Esqueceu sua senha?</LinkMedium>
            </ContainerInputLogin>


            <ButtonDefault onPress={() => Login()}>
                <ButtonTitle> ENTRAR </ButtonTitle>
            </ButtonDefault>

            <ButtonGoogle>
                <ContainerGoogle>

                    <Image source={require("../../../assets/img/GOOGLE.png")} />
                    <ButtonTitleGoogle>ENTRAR COM GOOGLE</ButtonTitleGoogle>

                </ContainerGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <TextLink onPress={() => navigation.navigate('Register')}>Crie uma conta agora!</TextLink> </TextAccount>
            </ContentAccount>

        </Container>
    )
}