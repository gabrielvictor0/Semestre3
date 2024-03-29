import { ButtonDefault } from "../../Button/Style"
import { Container, ContainerSubText, ContainerTextRecoverPassword } from "../../Container/Style"
import { Input } from "../../Input/Style"
import { ButtonTitle, SubTextEmail, TextResendCode, Title } from "../../Title/Style"
import { Logo } from "../../Logo/Style"

export const Register = ({navigation}) => {
    return(
        <Container>
            <Logo source={require("../../../assets/img/VitalHub_Logo.png")}/>
            <Title>Criar Conta</Title>
            <ContainerSubText>
                <SubTextEmail>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTextEmail>
            </ContainerSubText>
            <Input placeholder="Usuário ou E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confimar Senha"/>

            <ButtonDefault>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </ButtonDefault>

            <TextResendCode onPress={() => navigation.navigate('Login')}>Cancelar</TextResendCode>
        </Container>
    )
}