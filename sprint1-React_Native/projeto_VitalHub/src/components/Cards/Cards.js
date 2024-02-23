import { Image } from "react-native"
import { BoxCard, BoxCardInformation, BoxCardText, BoxCardTime, BoxTime, ButtonCard, ImageCard, TextAge, TextCancel, TextName, TextTime, TextType } from "./Style"
import { AntDesign } from "@expo/vector-icons"
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

                <BoxCardTime Status={Status}>
                    <BoxTime>
                        <AntDesign
                            name="clockcircle"
                            size={14}
                            color={Status == "pendentes" ? "#49B3BA" : "#8C8A97"}
                        />
                        <TextTime Status={Status}>{Time}</TextTime>
                    </BoxTime>
                </BoxCardTime>

            </BoxCardInformation>
            {
                Status == "canceladas" ? (
                    <>
                    </>
                ) : Status == "pendentes" ? (
                    <ButtonCard onPress={onPressCancel} Status={Status}>
                        <TextCancel Status={Status}>Cancelar</TextCancel>
                    </ButtonCard>
                ) : (
                    <ButtonCard onPress={onPressAppointment} Status={Status}>
                        <TextCancel Status={Status}>Ver Prontuário</TextCancel>
                    </ButtonCard>
                )
            }

        </BoxCard>

    )
}