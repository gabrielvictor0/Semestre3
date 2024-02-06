import { Button, Text } from "react-native"
import { Container, ContainerInputLogin } from "../../Container/Style"
import { Logo } from "../../Logo/Style"
import { ButtonTitle, Title } from "../../Title/Style"
import { Input } from "../../Input/Style"
import { LinkMedium } from "../../Links/Style"

export const Login = () => {


    return (
        <Container>

            <Logo source={require("../../../assets/img/VitalHub_Logo.png")} />

            <Title>Entrar ou criar conta</Title>

            <ContainerInputLogin>
                <Input placeholder="Usuário ou e-mail" placeholfer />
                <Input placeholder="Senha" />


                <LinkMedium>Esqueceu sua senha?</LinkMedium>
            </ContainerInputLogin>

            
            <Button>
                <ButtonTitle> Entrar </ButtonTitle>
            </Button>
            {/*
            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}

        </Container>
    )
}