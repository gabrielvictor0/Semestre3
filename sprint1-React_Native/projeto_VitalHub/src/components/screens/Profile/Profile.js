import { Container, ContainerFormProfile, ContainerInputSmall, ContainerScroll, ContainerSroll } from "../../Container/Style";
import { BoxInput } from "../../BoxInput/BoxInput";
import { Image } from "react-native";
import { ButtonProfile } from "../../Button/Style";
import { ButtonTitle, SubTextProfile, Title } from "../../Title/Style";
import { useState } from "react";

export const Profile = () => {
    const [statusEditable, setStatusEditable] = useState(false)
    return (
        <Container>

            <ContainerSroll>
                <ContainerFormProfile>


                    <Image style={{ alignSelf: "center", marginBottom: 20 }} source={require('../../../assets/img/img_profile.png')} />
                    <Title>Richard Kosta</Title>
                    <SubTextProfile>richard.kosta@gmail.com</SubTextProfile>

                    <BoxInput
                        textLabel={"Data de nascimento: "}
                        placeholder={"dd/mm/aaaa"}
                        keyType={"numeric"}
                        editable={statusEditable}
                    />

                    <BoxInput
                        textLabel={"CPF: "}
                        placeholder={"xxx.xxx.xxx-xx"}
                        keyType="numeric"
                        editable={statusEditable}
                    />

                    <BoxInput
                        textLabel={"Endereço: "}
                        placeholder={"Endereço.."}
                        editable={statusEditable} />

                    <ContainerInputSmall>

                        <BoxInput
                            textLabel={"Cep: "}
                            placeholder={"Cep.."}
                            fieldWidth={46}
                            keyType="numeric"
                            editable={statusEditable} />

                        <BoxInput
                            textLabel={"Cidade: "}
                            placeholder={"Cidade.."}
                            fieldWidth={43}
                            editable={statusEditable}
                        />
                    </ContainerInputSmall>

                    {
                        statusEditable == false
                            ?
                            <ButtonProfile onPress={() => setStatusEditable(true)}>
                                <ButtonTitle>EDITAR</ButtonTitle>
                            </ButtonProfile>
                            :
                            <ButtonProfile onPress={() => setStatusEditable(false)}>
                                <ButtonTitle>SALVAR</ButtonTitle>
                            </ButtonProfile>
                    }

                </ContainerFormProfile>

            </ContainerSroll>
        </Container>
    )
}