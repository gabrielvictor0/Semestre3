import { Image } from "react-native"
import { BoxCard, BoxCardInformation, BoxCardText, BoxCardTime, BoxTime, ButtonCard, ImageCard, TextAge, TextCancel, TextName, TextTime, TextType } from "./Style"
import { useState } from "react"

export const Cards = ({ SourceImage, Name, Age, Type, Time, Status, onPressCancel, onPressAppointment }) => {

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
            {
                Status == "canceladas" ? (
                    <>
                    </>
                ) : Status == "pendentes" ? (
                    <ButtonCard onPress={onPressCancel}>
                        <TextCancel Status={Status}>Cancelar</TextCancel>
                    </ButtonCard>
                ) : (
                    <ButtonCard onPress={onPressAppointment} >
                        <TextCancel Status={Status}>Ver Prontuário</TextCancel>
                    </ButtonCard>
                )
            }

        </BoxCard>

    )
}