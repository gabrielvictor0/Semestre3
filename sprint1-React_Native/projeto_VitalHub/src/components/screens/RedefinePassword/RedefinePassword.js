import { ButtonDefault, ButtonOut } from "../../Button/Style"
import { Container } from "../../Container/Style"
import { Input } from "../../Input/Style"
import { Logo } from "../../Logo/Style"
import { ButtonTitle, SubText, Title } from "../../Title/Style"
import { Image } from "react-native"

export const RedefinePassword = ({navigation}) => {
    return(
        <Container>
            <ButtonOut onPress={() => navigation.navigate('Login')}>
                <Image source={require("../../../assets/img/x.png")}/>
            </ButtonOut>
            <Logo source={require("../../../assets/img/VitalHub_Logo.png")}/>

            <Title> Redefinir senha</Title>
            <SubText>Insira e confirme a sua nova senha</SubText>

            <Input placeholder="Nova senha"/>
            <Input placeholder="Confirmar nova senha"/>

            <ButtonDefault>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </ButtonDefault>

        </Container>
    )
}