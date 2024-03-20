import { ScrollView, TouchableOpacity } from "react-native"
import { Container } from "../../Container/Style"
import { AgeMedicalRecord, BoxInformationMedicalRecord, BoxInputMedicalRecord, EmailMedicalRecord, ImageMedicalRecord, LabelInputMedicalRecord, NameMedicalRecord } from "../MedicalRecord/Style"
import { InputViewMedicalRecord, TtxVoltar } from "./Style"
import { TtxCancel } from "../../Links/Style"
import { ButtonDefault } from "../../Button/Style"
import { ButtonTitle } from "../../Title/Style"
import { useState } from "react"

export const ViewMedicalRecord = ({ editable , navigation}) => {
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
                        Height={"121px"}
                        Padding={"0px 0px 80px 10px"}
                        editable={statusEditable}
                        placeholder={"O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante"}
                        statusEditable={statusEditable}
                    />
                </BoxInputMedicalRecord>

                <BoxInputMedicalRecord>
                    <LabelInputMedicalRecord>Diagnóstico do paciente</LabelInputMedicalRecord>
                    <InputViewMedicalRecord
                        Height={"53px"}
                        Padding={"0px 0px 0px 10px"}
                        editable={statusEditable}
                        placeholder={"Infecção no ouvido"}
                        statusEditable={statusEditable}
                    />

                </BoxInputMedicalRecord>

                <BoxInputMedicalRecord>
                    <LabelInputMedicalRecord>Prescrição médica</LabelInputMedicalRecord>
                    <InputViewMedicalRecord
                        Height={"121px"}
                        Padding={"0px 0px 80px 10px"}
                        editable={statusEditable}
                        placeholder={"Medicamento: Advil Dosagem: 50 mg Frequência: 3 vezes ao dia Duração: 3 dias"}
                        statusEditable={statusEditable}
                    />
                </BoxInputMedicalRecord>

                {
                    statusEditable == false
                        ?
                        <ButtonDefault onPress={() => setStatusEditable(true)}>
                            <ButtonTitle>EDITAR</ButtonTitle>
                        </ButtonDefault>
                        :
                        <ButtonDefault onPress={() => setStatusEditable(false)}>
                            <ButtonTitle>SALVAR</ButtonTitle>
                        </ButtonDefault>
                }

                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <TtxVoltar>Voltar</TtxVoltar>
                </TouchableOpacity>

            </Container>
        </ScrollView>
    )
}