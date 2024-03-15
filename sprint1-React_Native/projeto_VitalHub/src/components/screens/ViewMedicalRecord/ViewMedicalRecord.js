import { ScrollView } from "react-native"
import { Container } from "../../Container/Style"
import { AgeMedicalRecord, BoxInformationMedicalRecord, BoxInputMedicalRecord, EmailMedicalRecord, ImageMedicalRecord, LabelInputMedicalRecord, NameMedicalRecord } from "../MedicalRecord/Style"
import { InputViewMedicalRecord, TtxVoltar } from "./Style"
import { TtxCancel } from "../../Links/Style"
import { ButtonDefault } from "../../Button/Style"
import { ButtonTitle } from "../../Title/Style"
import { useState } from "react"

export const ViewMedicalRecord = ({ editable }) => {
    const [statusEditable, setStatusEditable] = useState(false)
    return (
        <ScrollView>
            <Container>
                <ImageMedicalRecord source={require("../../../assets/img/img_profile.png")} />
                <NameMedicalRecord>Richard Kosta</NameMedicalRecord>

                <BoxInformationMedicalRecord>
                    <AgeMedicalRecord>22 anos</AgeMedicalRecord>
                    <EmailMedicalRecord>richard.kosta@gmail.com</EmailMedicalRecord>
                </BoxInformationMedicalRecord>

                <BoxInputMedicalRecord>
                    <LabelInputMedicalRecord>Descrição da consulta</LabelInputMedicalRecord>
                    <InputViewMedicalRecord
                        Height={121}
                        Padding={"0px 0px 80px 10px"}
                        editable={editable}
                        placeholder={"O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante"}
                    />
                </BoxInputMedicalRecord>

                <BoxInputMedicalRecord>
                    <LabelInputMedicalRecord>Diagnóstico do paciente</LabelInputMedicalRecord>
                    <InputViewMedicalRecord
                        Height={"53px"}
                        Padding={"0px 0px 0px 10px"}
                        editable={editable}
                        placeholder={"Infecção no ouvido"}
                    />

                </BoxInputMedicalRecord>

                <BoxInputMedicalRecord>
                    <LabelInputMedicalRecord>Prescrição médica</LabelInputMedicalRecord>
                    <InputViewMedicalRecord
                        Height={"121px"}
                        Padding={"0px 0px 80px 10px"}
                        editable={editable}
                        placeholder={"Medicamento: Advil Dosagem: 50 mg Frequência: 3 vezes ao dia Duração: 3 dias"}
                    />
                </BoxInputMedicalRecord>

                <ButtonDefault onPress={() => editable = true}>
                    <ButtonTitle>EDITAR</ButtonTitle>
                </ButtonDefault>


                <TtxVoltar>Voltar</TtxVoltar>
            </Container>
        </ScrollView>
    )
}