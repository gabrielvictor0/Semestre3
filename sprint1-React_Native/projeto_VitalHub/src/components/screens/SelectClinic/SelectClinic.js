import { FlatList, ScrollView, StatusBar, Text, TouchableOpacity } from "react-native"
import { CardClinic } from "../../CardClinic/CardClinic"
import { ContainerSelectClinic, TitleSelectClinic } from "./Style"
import { ButtonDefault } from "../../Button/Style"
import { ButtonTitle } from "../../Title/Style"
import { LinkMedium, TtxCancel } from "../../Links/Style"
import { useState } from "react"

const lista = [
    {
        id: "1",
        nomeClinica: "Clinica Natureh",
        endereco: "São Paulo, SP",
        dias: "Seg-Sex",
        nota: "4,7"
    },
    {
        id: "2",
        nomeClinica: "Diamond Pró-mulher",
        endereco: "São Bernardo do Campo, SP",
        dias: "Seg-Sex",
        nota: "4,3"
    },
    {
        id: "3",
        nomeClinica: "Clinica Villa Lobos",
        endereco: "Villa lobos, SP",
        dias: "Seg-Sex",
        nota: "5,0"
    },
    {
        id: "4",
        nomeClinica: "SP Oncologia Clínica",
        endereco: "São Caetano do Sul, SP",
        dias: "Seg-Sex",
        nota: "3,7"
    },
    {
        id: "5",
        nomeClinica: "Clinica ABC",
        endereco: "São Caetano do Sul, SP",
        dias: "Seg-Sex",
        nota: "4,7"
    },
    {
        id: "6",
        nomeClinica: "Diamond Pró-mulher",
        endereco: "São Caetano do Sul, SP",
        dias: "Seg-Sex",
        nota: "4,7"
    },
]

export const SelectClinic = ({ navigation }) => {
    const [statusCardClinic, setStatusCardClinic] = useState(null)

    return (
        <ContainerSelectClinic >
            
            <TitleSelectClinic>Selecionar clínica</TitleSelectClinic>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={lista}
                style={{width: "100%", paddingBottom: 5}}
                contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
                renderItem={({ item }) =>
                    <TouchableOpacity 
                    onPress={() => setStatusCardClinic(item.id)} 
                    style={{alignItems: "center"}}>
                        <CardClinic
                            TextNameClinic={item.nomeClinica}
                            TextAddress={item.endereco}
                            Day={item.dias}
                            Note={item.nota}
                            clickCard={statusCardClinic == item.id}

                        />
                    </TouchableOpacity>
                }
            />

            <ButtonDefault onPress={() => navigation.navigate("SelectDoctor")}>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </ButtonDefault>

            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <TtxCancel>
                    Cancelar
                </TtxCancel>
            </TouchableOpacity>

        </ContainerSelectClinic>
    )
}