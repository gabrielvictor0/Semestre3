import { ScrollView } from "react-native"
import { Container } from "../../Container/Style"
import { AgeMedicalRecord, BoxInformationMedicalRecord, BoxInputMedicalRecord, EmailMedicalRecord, ImageMedicalRecord, LabelInputMedicalRecord, NameMedicalRecord } from "../MedicalRecord/Style"
import { InputViewMedicalRecord, TtxVoltar } from "./Style"
import { TtxCancel } from "../../Links/Style"

export const ViewMedicalRecord = ({ editable = false }) => {
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

                <TtxVoltar>Voltar</TtxVoltar>
            </Container>
        </ScrollView>
    )
}