import { Modal } from "react-native"
import { ButtonAppointmentCancel, ContainerAppointment, ImageAppointment, TextAgeAppointment, TextButtonAppointment, TextEmailAppointment, TitleAppointment } from "./Style"
import { ButtonDefault } from "../Button/Style"
import { ButtonTitle } from "../Title/Style"

export const AppointmentModal = ({ visible, setShowModalAppointment, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ContainerAppointment>
                <ImageAppointment />
                <TitleAppointment>Nicole Sarga</TitleAppointment>
                <TextAgeAppointment>22 anos</TextAgeAppointment>
                <TextEmailAppointment>niccole.sarga@gmail.com</TextEmailAppointment>
                <ButtonDefault>
                    <ButtonTitle>INSERIR PRONTUÁRIO</ButtonTitle>
                </ButtonDefault>
                <ButtonAppointmentCancel onPress={() => setShowModalAppointment(false)}>
                    <TextButtonAppointment>Cancelar</TextButtonAppointment>
                </ButtonAppointmentCancel>
            </ContainerAppointment>
        </Modal>
    )
}  