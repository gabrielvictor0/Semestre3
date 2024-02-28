import { useState } from "react"
import { ButtonHome } from "../../Button/Button"
import { CalendarHome } from "../../CalendarHome/CalendarHome"
import { Container, ContainerButtonHome } from "../../Container/Style"
import { HeaderDefault } from "../../Header/Header"
import { FlatList, TouchableOpacity } from "react-native"
import { Cards } from "../../Cards/Cards"
import image from "../../../assets/img/pinkman.jpg"
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ContainerScheduleAppointment } from "./Style"
import { ModalScheduleAppointment } from "../../ModalScheduleAppointment/ModalScheduleAppointment"

const lista = [
    {
        id: "1",
        nome: "Dr. Murilo",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        status: "pendentes",
        image: image
    },
    {
        id: "2",
        nome: "Dra. Vanessa",
        idade: "36",
        horarioConsulta: "15:20",
        tipoConsulta: "Urgencia",
        status: "realizadas",
        image: image
    },
    {
        id: "3",
        nome: "Dra. Rafaela",
        idade: "28",
        horarioConsulta: "16:00",
        tipoConsulta: "Urgencia",
        status: "canceladas",
        image: image
    }
]

export const HomePatient = ({navigation}) => {
    const [statusButton, setStatusButton] = useState("pendentes")
    const [modalSchedule, setModalSchedule] = useState(false)
    return (
        <Container>
            <HeaderDefault
                source={require("../../../assets/img/walter.jpg")}
                textName={"Walter"} />
            <CalendarHome />
            <ContainerButtonHome>
                <ButtonHome
                    textButton={"Pendentes"}
                    clickButton={statusButton == "pendentes"}
                    onPress={() => setStatusButton("pendentes")}
                />

                <ButtonHome
                    textButton={"Realizadas"}
                    clickButton={statusButton == "realizadas"}
                    onPress={() => setStatusButton("realizadas")}
                />
                <ButtonHome
                    textButton={"Canceladas"}
                    clickButton={statusButton == "canceladas"}
                    onPress={() => setStatusButton("canceladas")}
                />
            </ContainerButtonHome>
            <FlatList
                data={lista}
                renderItem={({ item }) =>
                    statusButton == item.status && (
                        <Cards
                            Name={item.nome}
                            Age={item.idade}
                            Time={item.horarioConsulta}
                            Type={item.tipoConsulta}
                            Status={item.status}
                            SourceImage={item.image}
                        />
                    )} />

            <TouchableOpacity onPress={() => setModalSchedule(true)}>
                <ContainerScheduleAppointment >
                    <FontAwesome5 name="stethoscope" size={30} color="white" />
                </ContainerScheduleAppointment>
            </TouchableOpacity>

            <ModalScheduleAppointment
            visible={modalSchedule}
            setModalSchedule={setModalSchedule}
            navigation={navigation}/>

        </Container>
    )
}