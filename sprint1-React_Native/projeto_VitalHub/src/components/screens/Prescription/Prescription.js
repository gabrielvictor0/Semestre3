import { ScrollView, TouchableOpacity } from "react-native"
import { BoxBtnPrescription, BoxInputPrescription, BoxSubTextPrescription, ButtonPhoto, ContentPhoto, ImagePrescription, InputPrescription, LabelPrescription, Line, SubTextPrescription, TextBtnCancelar, TextBtnPhoto, TitltePrescription, TxtReturn } from "./Style"
import { Container } from "../../Container/Style"
import { TtxCancel } from "../../Links/Style"
import { MaterialIcons } from '@expo/vector-icons';


export const Prescription = ({navigation}) => {
    return (
        <Container>
            <ScrollView style={{ width: "100%", height: "100%" }} showsVerticalScrollIndicator={false}>
                <ImagePrescription source={require("../../../assets/img/img_prescription.jpg")} />
                <TitltePrescription>Dr. Claudio</TitltePrescription>

                <BoxSubTextPrescription>

                    <SubTextPrescription>Clinico Geral</SubTextPrescription>
                    <SubTextPrescription>CRM-15286</SubTextPrescription>
                </BoxSubTextPrescription>

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

                <BoxBtnPrescription>
                    <ButtonPhoto onPress={() => navigation.navigate("CameraPrescription")}>
                        <ContentPhoto>
                            <MaterialIcons name="add-a-photo" color={"white"} size={25} />
                            <TextBtnPhoto>Enviar</TextBtnPhoto>
                        </ContentPhoto>
                    </ButtonPhoto>

                    <TouchableOpacity>
                        <TextBtnCancelar>Cancelar</TextBtnCancelar>
                    </TouchableOpacity>
                </BoxBtnPrescription>
                <Line />

                <BoxInputPrescription>
                    <InputPrescription Height={103} />
                </BoxInputPrescription>

                <TouchableOpacity onPress={() => navigation.replace("Main")}>
                    <TxtReturn>Voltar</TxtReturn>
                </TouchableOpacity>

            </ScrollView>
        </Container>
    )
}