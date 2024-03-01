import { useState } from "react";
import { ButtonHome } from "../../Button/Button";
import { CalendarHome } from "../../CalendarHome/CalendarHome";
import { Container, ContainerButtonHome } from "../../Container/Style";
import { HeaderDefault } from "../../Header/Header";
import { Cards } from "../../Cards/Cards";
import { FlatList, TouchableOpacity } from "react-native";

import image from "../../../assets/img/img_person.jpg"
import { CancellationModal } from "../../CancellationModal/CancellationModal";
import { AppointmentModal } from "../../AppointmentModal/AppointmentModal";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons"
import { OptionsHomeDoctor } from "./Style";
import { ContainerScheduleAppointment } from "../HomePatient/Style"
import { ModalScheduleAppointment } from "../../ModalScheduleAppointment/ModalScheduleAppointment"

const lista = [
    {
        id: "1",
        nome: "Gabriel Victor",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        image: image,
        status: "pendentes",
        typeUser: "paciente"
    },
    {
        id: "4",
        nome: "Walter",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        image: image,
        status: "pendentes",
        typeUser: "paciente"
    },
    {
        id: "2",
        nome: "Richard Kosta",
        idade: "28",
        horarioConsulta: "15:00",
        tipoConsulta: "Urgencia",
        image: image,
        status: "realizadas",
        typeUser: "paciente"
    },
    {
        id: "3",
        nome: "Gabriel Victor",
        idade: "28",
        horarioConsulta: "15:00",
        tipoConsulta: "Urgencia",
        image: image,
        status: "canceladas",
        typeUser: "paciente"
    },
    {
        id: "5",
        nome: "Dr. Murilo",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        status: "agendadas",
        typeUser: "medico",
        image: image
    },
    {
        id: "6",
        nome: "Dra. Vanessa",
        idade: "36",
        horarioConsulta: "15:20",
        tipoConsulta: "Urgencia",
        status: "realizadas",
        typeUser: "medico",
        image: image
    },
    {
        id: "7",
        nome: "Dra. Rafaela",
        idade: "28",
        horarioConsulta: "16:00",
        tipoConsulta: "Urgencia",
        status: "canceladas",
        typeUser: "medico",
        image: image
    }
]


export const Home = ({ navigation }) => {
    const [statusList, setStatusList] = useState("pendentes")
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [userLogin, setUserLogin] = useState("paciente")
    const [statusButton, setStatusButton] = useState("agendadas")
    const [modalSchedule, setModalSchedule] = useState(false)

    return (
        userLogin == "paciente" ?
            <Container>
                <HeaderDefault
                    source={require("../../../assets/img/walter.jpg")}
                    textName={"Walter"} />
                <CalendarHome />
                <ContainerButtonHome>
                    <ButtonHome
                        textButton={"Agendadas"}
                        clickButton={statusButton == "agendadas"}
                        onPress={() => setStatusButton("agendadas")}
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
                        statusButton == item.status && item.typeUser == 'medico' && (
                            <TouchableOpacity>
                                <Cards
                                    Name={item.nome}
                                    Age={item.idade}
                                    Time={item.horarioConsulta}
                                    Type={item.tipoConsulta}
                                    Status={item.status}
                                    SourceImage={item.image}
                                />
                            </TouchableOpacity>

                        )} />

                <TouchableOpacity onPress={() => setModalSchedule(true)}>
                    <ContainerScheduleAppointment >
                        <FontAwesome5 name="stethoscope" size={30} color="white" />
                    </ContainerScheduleAppointment>
                </TouchableOpacity>

                <ModalScheduleAppointment
                    visible={modalSchedule}
                    setModalSchedule={setModalSchedule}
                    navigation={navigation} />

            </Container>
            :
            < Container >

                <HeaderDefault
                    source={require("../../../assets/img/pinkman.jpg")}
                    textName={"Dr. Claudio"} />

                <CalendarHome />
                <ContainerButtonHome>
                    <ButtonHome
                        textButton={"Pendentes"}
                        clickButton={statusList === "pendentes"}
                        onPress={() => setStatusList("pendentes")}
                    />



                    <ButtonHome
                        clickButton={statusList === "realizadas"}
                        onPress={() => setStatusList("realizadas")}
                        textButton={"Realizadas"}
                    />

                    <ButtonHome
                        clickButton={statusList === "canceladas"}
                        onPress={() => setStatusList("canceladas")}
                        textButton={"Canceladas"}
                    />
                </ContainerButtonHome>
                <FlatList
                    data={lista}
                    renderItem={({ item }) =>
                        statusList == item.status && item.typeUser == "paciente" && (
                            <Cards
                                Name={item.nome}
                                Age={item.idade}
                                Time={item.horarioConsulta}
                                Type={item.tipoConsulta}
                                SourceImage={item.image}
                                Status={item.status}
                                onPressCancel={() => { setShowModalCancel(true) }}
                                onPressAppointment={() => { setShowModalAppointment(true) }}
                            />
                        )
                    }
                    showsVerticalScrollIndicator={false}
                />

                <CancellationModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />

                <AppointmentModal
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                    navigation={navigation} />

                <OptionsHomeDoctor>
                    <FontAwesome6 name='calendar-check' size={25} color="#4E4B59" />
                    <FontAwesome5 name="hospital" size={25} color="#4E4B59" />
                    <FontAwesome6 name='user-circle' size={25} color="#4E4B59" />
                </OptionsHomeDoctor>

            </Container >

    )
}