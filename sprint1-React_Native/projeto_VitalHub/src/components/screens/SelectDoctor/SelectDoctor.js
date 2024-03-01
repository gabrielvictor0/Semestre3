import { FlatList, TouchableOpacity } from "react-native"
import { ButtonDefault } from "../../Button/Style"
import { CardDoctor } from "../../CardDoctor/CardDoctor"
import { TtxCancel } from "../../Links/Style"
import { ButtonTitle } from "../../Title/Style"
import { ContainerSelectDoctor, TitleSelectDoctor } from "./Style"
import { useState } from "react"

const lista = [
    {
        id: "1",
        nameDoctor: "Dr. Gabriel Victor",
        specialty: "Neurocirugiao"
    },
    {
        id: "2",
        nameDoctor: "Dr. Rubens",
        specialty: "Fisioterapeuta"
    },
    {
        id: "3",
        nameDoctor: "Dr. Eduardo",
        specialty: "Cirurgiao plastico"
    },
    {
        id: "4",
        nameDoctor: "Dr. Wanderson",
        specialty: "Endocrinologista"
    },
    {
        id: "5",
        nameDoctor: "Dr. Marcio",
        specialty: "Clinico Geral"
    },
]
export const SelectDoctor = ({navigation}) => {
    const [statusCardDoctor, setStatusCardDoctor] = useState(null)
    return (
        <ContainerSelectDoctor>
            <TitleSelectDoctor>Selecionar médico</TitleSelectDoctor>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={lista}
                renderItem={({ item }) =>
                    <TouchableOpacity 
                    onPress={() => setStatusCardDoctor(item.id)}>
                        <CardDoctor
                            TxtNameDoctor={item.nameDoctor}
                            TxtSpecialty={item.specialty}
                            clickCard={statusCardDoctor == item.id}
                        />
                    </TouchableOpacity>
                }
            />

            <ButtonDefault>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </ButtonDefault>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <TtxCancel>Cancelar</TtxCancel>
            </TouchableOpacity>
        </ContainerSelectDoctor>
    )
}