import { Container, ContainerFormProfile, ContainerInputSmall, ContainerScroll, ContainerSroll } from "../../Container/Style";
import { BoxInput } from "../../BoxInput/BoxInput";
import { Image } from "react-native";
import {  ButtonProfile } from "../../Button/Style";
import { ButtonTitle, SubTextProfile, Title } from "../../Title/Style";

export const Profile = () => {
    return (
        <Container>

            <ContainerSroll>
                <ContainerFormProfile>


                    <Image style={{alignSelf: "center", marginBottom: 20}} source={require('../../../assets/img/img_profile.png')} />
                    <Title>Richard Kosta</Title>
                    <SubTextProfile>richard.kosta@gmail.com</SubTextProfile>

                    <BoxInput
                        textLabel={"Data de nascimento: "}
                        placeholder={"dd/mm/aaaa"} />

                    <BoxInput
                        textLabel={"CPF: "}
                        placeholder={"xxx.xxx.xxx-xx"} />

                    <BoxInput
                        textLabel={"Endereço: "}
                        placeholder={"Endereço.."} />

                    <ContainerInputSmall>

                        <BoxInput
                            textLabel={"Cep: "}
                            placeholder={"Cep.."}
                            fieldWidth={46} />

                        <BoxInput
                            textLabel={"Cidade: "}
                            placeholder={"Cidade.."}
                            fieldWidth={43}
                        />
                    </ContainerInputSmall>

                    <ButtonProfile>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </ButtonProfile>

                    <ButtonProfile>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </ButtonProfile>
                </ContainerFormProfile>

            </ContainerSroll>
        </Container>
    )
}