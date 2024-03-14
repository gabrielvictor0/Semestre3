import { ScrollView } from "react-native"
import { BoxInputPrescription, ImagePrescription, InputPrescription, LabelPrescription, SubTextPrescription, TitltePrescription } from "./Style"
import { Container } from "../../Container/Style"

export const Prescription = () => {
    return (
        <Container>
            <ScrollView style={{ width: "100%", height: "100%" }}>
                <ImagePrescription source={require("../../../assets/img/img_prescription.jpg")} />
                <TitltePrescription>Dr. Claudio</TitltePrescription>
                <SubTextPrescription>Clinico Geral</SubTextPrescription>

                <BoxInputPrescription>
                    <LabelPrescription>Descrição da consulta</LabelPrescription>
                    <InputPrescription Height={121} />
                </BoxInputPrescription>

                <BoxInputPrescription>
                    <LabelPrescription>Diagnóstico do paciente</LabelPrescription>
                    <InputPrescription Height={53} />
                </BoxInputPrescription>

                <BoxInputPrescription>
                    <LabelPrescription>Prescrição médica</LabelPrescription>
                    <InputPrescription Height={133} />
                </BoxInputPrescription>
                
                <BoxInputPrescription>
                    <LabelPrescription>Exame médicos</LabelPrescription>
                    <InputPrescription Height={111} />
                </BoxInputPrescription>

            </ScrollView>
        </Container>
    )
}