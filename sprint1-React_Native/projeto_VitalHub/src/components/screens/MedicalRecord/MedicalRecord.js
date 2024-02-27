import { ScrollView, TouchableOpacity } from "react-native"
import { Container } from "../../Container/Style"
import { AgeMedicalRecord, BoxInformationMedicalRecord, BoxInputMedicalRecord, EmailMedicalRecord, ImageMedicalRecord, InputMedicalRecord, LabelInputMedicalRecord, NameMedicalRecord, TextButtonCancel } from "./Style"
import { ButtonDefault } from "../../Button/Style"
import { ButtonTitle } from "../../Title/Style"
import { useState } from "react"

export const MedicalRecord = ({ navigation, editable = true }) => {
    const [edit, setEdit] = useState(true)
    return (
        edit == true ?
            <>
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
                            <InputMedicalRecord
                                placeholder={"Descrição"}
                                Height={"121px"}
                                Padding={"0px 0px 80px 10px"}
                                editable={editable} />
                        </BoxInputMedicalRecord>

                        <BoxInputMedicalRecord>
                            <LabelInputMedicalRecord>Diagnóstico do paciente</LabelInputMedicalRecord>
                            <InputMedicalRecord
                                placeholder={"Diagnóstico"}
                                Height={"53px"}
                                Padding={"0px 0px 0px 10px"}
                                editable={editable} />
                        </BoxInputMedicalRecord>

                        <BoxInputMedicalRecord>
                            <LabelInputMedicalRecord>Prescrição médica</LabelInputMedicalRecord>
                            <InputMedicalRecord
                                placeholder={"Prescrição médica"}
                                Height={"121px"}
                                Padding={"0px 0px 80px 10px"}
                                editable={editable} />
                        </BoxInputMedicalRecord>

                        <ButtonDefault onPress={() => setEdit(false)}>
                            <ButtonTitle>SALVAR</ButtonTitle>
                        </ButtonDefault>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
                            style={{ alignSelf: "center", marginTop: 30, marginBottom: 30 }}>
                            <TextButtonCancel>Cancelar</TextButtonCancel>
                        </TouchableOpacity>
                    </Container>
                </ScrollView>
            </> :
            <>
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
                            <InputMedicalRecord
                                placeholder={"Descrição"}
                                Height={"121px"}
                                Padding={"0px 0px 80px 10px"}
                                editable={editable = false} />
                        </BoxInputMedicalRecord>

                        <BoxInputMedicalRecord>
                            <LabelInputMedicalRecord>Diagnóstico do paciente</LabelInputMedicalRecord>
                            <InputMedicalRecord
                                placeholder={"Diagnóstico"}
                                Height={"53px"}
                                Padding={"0px 0px 0px 10px"}
                                editable={editable = false} />
                        </BoxInputMedicalRecord>

                        <BoxInputMedicalRecord>
                            <LabelInputMedicalRecord>Prescrição médica</LabelInputMedicalRecord>
                            <InputMedicalRecord
                                placeholder={"Prescrição médica"}
                                Height={"121px"}
                                Padding={"0px 0px 80px 10px"}
                                editable={editable = false} />
                        </BoxInputMedicalRecord>

                        {/* <ButtonDefault onPress={() => setEdit(false)}>
                            <ButtonTitle>SALVAR</ButtonTitle>
                        </ButtonDefault> */}

                        <ButtonDefault onPress={() => setEdit(true)}>
                            <ButtonTitle>EDITAR</ButtonTitle>
                        </ButtonDefault>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
                            style={{ alignSelf: "center", marginTop: 30, marginBottom: 30 }}>
                            <TextButtonCancel>Cancelar</TextButtonCancel>
                        </TouchableOpacity>

                    </Container>
                </ScrollView>
            </>
    )
}