import { ButtonEntrar } from "../../Button/Style"
import { Container } from "../../Container/Style"
import { Input } from "../../Input/Style"
import { ButtonTitle, SubTextEmail, TextResendCode, Title } from "../../Title/Style"
import { Logo } from "../../Logo/Style"

export const Register = ({navigation}) => {
    return(
        <Container>
            <Logo source={require("../../../assets/img/VitalHub_Logo.png")}/>
            <Title>Criar Conta</Title>
            <SubTextEmail>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTextEmail>
            <Input placeholder="Usuário ou E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confimar Senha"/>

            <ButtonEntrar>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </ButtonEntrar>

            <TextResendCode onPress={() => navigation.navigate('Login')}>Cancelar</TextResendCode>
        </Container>
    )
}