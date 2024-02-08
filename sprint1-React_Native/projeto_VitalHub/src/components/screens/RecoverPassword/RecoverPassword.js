import { ButtonDefault, ButtonOut} from "../../Button/Style"
import { Container, ContainerTextRecoverPassword } from "../../Container/Style"
import { Input, InputRecoverPassword } from "../../Input/Style"
import {  Logo } from "../../Logo/Style"
import { ButtonTitle, SubText,  TitleRecoverPassword } from "../../Title/Style"
import { Image} from "react-native"


export const RecoverPassword = ({ navigation }) => {
    return (

        <Container>
            <ButtonOut onPress={() => navigation.navigate('Login')}>
                <Image source={require("../../../assets/img/seta.png")}  />
            </ButtonOut>

            <Logo source={require("../../../assets/img/VitalHub_Logo.png")} />

            <TitleRecoverPassword>Recuperar senha</TitleRecoverPassword>

            <ContainerTextRecoverPassword>
                <SubText>
                    Digite abaixo seu email cadastrado que
                    enviaremos um link para recuperação
                    de senha</SubText>
            </ContainerTextRecoverPassword>

            <Input placeholder="Usuário ou e-mail" />

            <ButtonDefault onPress={() => navigation.navigate('EmailCode')}>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </ButtonDefault>


        </Container>
    )

}