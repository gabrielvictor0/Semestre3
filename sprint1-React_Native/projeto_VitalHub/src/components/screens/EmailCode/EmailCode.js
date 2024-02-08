import { ButtonDefault, ButtonOut } from "../../Button/Style"
import { Container, ContainerCheckCode } from "../../Container/Style"
import { CheckCode } from "../../Input/Style"
import { Logo } from "../../Logo/Style"
import { ButtonTitle, SubTextEmail, TextEmail, TextResendCode, Title } from "../../Title/Style"
import { Image } from "react-native"

export const EmailCode = ({navigation}) => {
    return (
        <Container>
            <ButtonOut onPress={() => navigation.navigate('Login')}>
                <Image source={require("../../../assets/img/x.png")} />
            </ButtonOut>
            <Logo source={require("../../../assets/img/VitalHub_Logo.png")} />

            <Title>Verifique seu e-mail</Title>

            <SubTextEmail> Digite o código de 4 dígitos enviado para <TextEmail> username@email.com</TextEmail></SubTextEmail>

            <ContainerCheckCode>
                <CheckCode placeholder="0"/>
                <CheckCode placeholder="0"/>
                <CheckCode placeholder="0"/>
                <CheckCode placeholder="0"/>
            </ContainerCheckCode>

            <ButtonDefault onPress={() => navigation.navigate('RedefinePassword')}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </ButtonDefault>

            <TextResendCode>Reenviar Código</TextResendCode>

        </Container>
    )

}