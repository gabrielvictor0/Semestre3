import { Modal, TouchableOpacity } from "react-native"
import { ButtonDefaultCheckAppointment, ContainerCheckAppointment, LabelCheckAppintment, SubTextCheckAppointment, TextInformation, TitleCheckAppointment, TtxCancelCheckAppointment, ViewModalCheckAppointment } from "./Style"
import { ButtonDefault } from "../Button/Style"
import { ButtonTitle } from "../Title/Style"
import { TtxCancel } from "../Links/Style"

export const ModalCheckAppointment = ({ visible, transparent, setModalCheckAppointment }) => {
    return (
        <Modal transparent={transparent} visible={visible} statusBarTranslucent={true}>
            <ViewModalCheckAppointment>
                <ContainerCheckAppointment>
                    <TitleCheckAppointment>Agendar consulta</TitleCheckAppointment>
                    <SubTextCheckAppointment>Consulte os dados selecionados para a sua consulta</SubTextCheckAppointment>

                    <LabelCheckAppintment>Data da consulta</LabelCheckAppintment>
                    <TextInformation></TextInformation>

                    <LabelCheckAppintment>Médico(a) da consulta</LabelCheckAppintment>
                    <TextInformation></TextInformation>
                    <TextInformation></TextInformation>

                    <LabelCheckAppintment>Local da consulta</LabelCheckAppintment>
                    <TextInformation></TextInformation>

                    <LabelCheckAppintment>Tipo da consulta</LabelCheckAppintment>
                    <TextInformation></TextInformation>

                    <ButtonDefaultCheckAppointment>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </ButtonDefaultCheckAppointment>

                    <TouchableOpacity onPress={() => setModalCheckAppointment(false)}>
                        <TtxCancelCheckAppointment>Cancelar</TtxCancelCheckAppointment>
                    </TouchableOpacity>

                </ContainerCheckAppointment>
            </ViewModalCheckAppointment>
        </Modal>
    )
}