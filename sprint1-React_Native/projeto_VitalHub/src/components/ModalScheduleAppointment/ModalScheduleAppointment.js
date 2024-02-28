import { Modal, TouchableOpacity } from "react-native"
import { BoxInputSchedule, BoxLevelAppointment, BoxModalSchedule, BtnLevelAppointment, InputLevelAppointment, InputSelect, LabelInputSchedule, TextBtn, TextBtnCancelSchedule, TitleSchedule, ViewModalSchedule } from "./Style"
import { ButtonDefault } from "../Button/Style"
import { ButtonTitle } from "../Title/Style"
import { TextCancel } from "../Cards/Style"
import { TextBtnCancelAppointment } from "../AppointmentModal/Style"
import { useState } from "react"

export const ModalScheduleAppointment = ({ navigation, setModalSchedule, transparent, visible }) => {
    const [statusLevelAppointment, setStatusLevelAppointment] = useState("Rotina")
    return (
        <Modal transparent={transparent} visible={visible} animationType="fade" statusBarTranslucent={true}>
            <ViewModalSchedule>
                <BoxModalSchedule>
                    <TitleSchedule>Agendar consulta</TitleSchedule>

                    <BoxInputSchedule marginBottom={"20px"}>
                        <LabelInputSchedule>Qual o nível da consulta</LabelInputSchedule>

                        <BoxLevelAppointment>

                            <BtnLevelAppointment
                                width={"88px"}
                                clickButton={statusLevelAppointment == "Rotina"}
                                onPress={() => setStatusLevelAppointment("Rotina")}>
                                <TextBtn clickButton={statusLevelAppointment == "Rotina"}>Rotina</TextBtn>
                            </BtnLevelAppointment>

                            <BtnLevelAppointment
                                width={"88px"}
                                clickButton={statusLevelAppointment == "Exame"}
                                onPress={() => setStatusLevelAppointment("Exame")}>
                                <TextBtn clickButton={statusLevelAppointment == "Exame"}>Exame</TextBtn>
                            </BtnLevelAppointment>

                            <BtnLevelAppointment
                                width={"98px"}
                                clickButton={statusLevelAppointment == "Urgência"}
                                onPress={() => setStatusLevelAppointment("Urgência")}>
                                <TextBtn clickButton={statusLevelAppointment == "Urgência"} >Urgência</TextBtn>
                            </BtnLevelAppointment>

                        </BoxLevelAppointment>

                    </BoxInputSchedule>

                    <BoxInputSchedule marginBottom={"33%"}>
                        <LabelInputSchedule>Informe a localização desejada</LabelInputSchedule>
                        <InputSelect placeholder="Informe a localização" />
                    </BoxInputSchedule>

                    <ButtonDefault onPress={() => navigation.navigate("SelectClinic")}>
                        <ButtonTitle>CONTINUAR</ButtonTitle>
                    </ButtonDefault>

                    <TouchableOpacity onPress={() => setModalSchedule(false)}>
                        <TextBtnCancelSchedule>Cancelar</TextBtnCancelSchedule>
                    </TouchableOpacity>
                </BoxModalSchedule>
            </ViewModalSchedule>
        </Modal>
    )
}