import { Modal, TouchableOpacity } from "react-native"
import { ContainerAppoinmentLocation, ContentInfo, ImageAppointmentLocation, InfoAppointmentLocation, TitleAppoinmentLocation, ViewApointmentLocation } from "./Style"
import { ButtonDefault } from "../Button/Style"
import { ButtonTitle } from "../Title/Style"
import { TtxCancel } from "../Links/Style"

export const ModalAppointmentLocation = ({ navigation,transparent, visible, setModalAppointmentLocation, ...rest }) => {
    return (
        <Modal transparent={transparent} visible={visible} statusBarTranslucent={true}>
            <ViewApointmentLocation>
                <ContainerAppoinmentLocation>
                    <ImageAppointmentLocation source={require("../../assets/img/pinkman.jpg")} />
                    <TitleAppoinmentLocation>Dr. Claudio</TitleAppoinmentLocation>

                    <ContentInfo>
                        <InfoAppointmentLocation>Clinico geral</InfoAppointmentLocation>
                        <InfoAppointmentLocation>CRM-15286</InfoAppointmentLocation>
                    </ContentInfo>

                    <ButtonDefault onPress={() => navigation.navigate("AppointmentAddress")}>
                        <ButtonTitle>VER LOCAL DA CONSULTA</ButtonTitle>
                    </ButtonDefault>

                    <TouchableOpacity onPress={() => setModalAppointmentLocation(false)}>
                        <TtxCancel>Cancelar</TtxCancel>
                    </TouchableOpacity>

                </ContainerAppoinmentLocation>
            </ViewApointmentLocation>
        </Modal>
    )
}