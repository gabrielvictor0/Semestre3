import { CardClinic } from "../../CardClinic/CardClinic"
import { ContainerSelectClinic, TitleSelectClinic } from "./Style"

export const SelectClinic = () => {
    return(
        <ContainerSelectClinic>
            <TitleSelectClinic>Selecionar clínica</TitleSelectClinic>
            <CardClinic 
            TextNameClinic={"Clinica Natureh"}
            TextAddress={"São Paulo, SP"}
            Day={"Seg-Sex"}
            Note={"4,7"}/>
        </ContainerSelectClinic>
    )
}