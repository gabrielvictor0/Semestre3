import { Modal } from "react-native"
import { BoxTextAppointment, ButtonCancelAppointment, ContainerAppointment, ImageAppointment, NameAppointment, TextAppointment, TextBtnCancelAppointment, ViewModalAppointment } from "./Style"
import { ButtonDefault } from "../Button/Style"
import { ButtonTitle } from "../Title/Style"

export const AppointmentModal = ({visible, setShowModalAppointment, ...rest}) => {
    return(
        <Modal visible={visible} transparent={true} animationType="fade">
            <ViewModalAppointment>
                <ContainerAppointment>
                    <ImageAppointment source={require("../../assets/img/epico.jpg")}/>

                    <NameAppointment>Niccole Sarga</NameAppointment>

                    <BoxTextAppointment>
                        <TextAppointment>22 anos</TextAppointment>
                        <TextAppointment>niccole.sarga@gmail.com</TextAppointment>
                    </BoxTextAppointment>

                    <ButtonDefault>
                        <ButtonTitle>INSERIR PROTUÁRIO</ButtonTitle>
                    </ButtonDefault>

                    <ButtonCancelAppointment onPress={() => setShowModalAppointment(false)}>
                        <TextBtnCancelAppointment>Cancelar</TextBtnCancelAppointment>
                    </ButtonCancelAppointment>

                </ContainerAppointment>
            </ViewModalAppointment>
        </Modal>
    )
}