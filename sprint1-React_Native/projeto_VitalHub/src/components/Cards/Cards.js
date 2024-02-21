import { Image } from "react-native"
import { BoxCard, BoxCardInformation, BoxCardText, BoxCardTime, BoxTime, ButtonCancel, ContainerCard, ContainerInformation, ImageCard, TextAge, TextCancel, TextName, TextTime, TextType } from "./Style"
import { useState } from "react"

export const Cards = ({ SourceImage, Name, Age, Type, Time, Status}) => {

    return (
        <BoxCard Status={Status}>
            <ImageCard source={SourceImage} />
            <BoxCardInformation>
                <TextName>{Name}</TextName>
                <BoxCardText>
                    <TextAge>{Age} anos</TextAge>
                    <Image style={{ alignSelf: "center", marginLeft: 4, marginRight: 4 }} source={require("../../assets/img/img_pontinho.png")} />
                    <TextType>{Type}</TextType>
                </BoxCardText>

                <BoxCardTime>
                    <BoxTime>
                        <Image style={{ alignSelf: "center" }} source={require("../../assets/img/img_time.png")} />
                        <TextTime>{Time}</TextTime>
                    </BoxTime>
                </BoxCardTime>

            </BoxCardInformation>

            <ButtonCancel>
                <TextCancel>Cancelar</TextCancel>
            </ButtonCancel>
        </BoxCard>

    )
}