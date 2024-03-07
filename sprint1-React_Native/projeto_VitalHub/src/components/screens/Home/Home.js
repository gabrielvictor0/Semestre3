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
import { ModalAppointmentLocation } from "../../ModalAppointmentLocation/ModalAppointmentLocation";

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
        status: "pendentes",
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
    const [modalSchedule, setModalSchedule] = useState(false)
    const [modalAppointmentLocation, setModalAppointmentLocation] = useState(false)

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
                        clickButton={statusList == "pendentes"}
                        onPress={() => setStatusList("pendentes")}
                    />

                    <ButtonHome
                        textButton={"Realizadas"}
                        clickButton={statusList == "realizadas"}
                        onPress={() => setStatusList("realizadas")}
                    />
                    <ButtonHome
                        textButton={"Canceladas"}
                        clickButton={statusList == "canceladas"}
                        onPress={() => setStatusList("canceladas")}
                    />
                </ContainerButtonHome>
                <FlatList
                    data={lista}
                    renderItem={({ item }) =>
                        statusList == item.status && item.typeUser == 'medico' && (
                            <TouchableOpacity onPress={() => setModalAppointmentLocation(true)}>
                                <Cards
                                    Name={item.nome}
                                    Age={item.idade}
                                    Time={item.horarioConsulta}
                                    Type={item.tipoConsulta}
                                    Status={item.status}
                                    SourceImage={item.image}
                                    onPressCancel={() => { setShowModalCancel(true) }}
                                />
                            </TouchableOpacity>

                        )} />

                <TouchableOpacity onPress={() => setModalSchedule(true)}>
                    <ContainerScheduleAppointment >
                        <FontAwesome5 name="stethoscope" size={30} color="white" />
                    </ContainerScheduleAppointment>
                </TouchableOpacity>

                <ModalAppointmentLocation
                    visible={modalAppointmentLocation}
                    setModalAppointmentLocation={setModalAppointmentLocation}
                    navigation={navigation}
                />

                <ModalScheduleAppointment
                    visible={modalSchedule}
                    setModalSchedule={setModalSchedule}
                    navigation={navigation} />

                <CancellationModal
                    visible={showModalCancel}
                    setShowModalCancel={setShowModalCancel}
                />

                <OptionsHomeDoctor>
                    <FontAwesome6 name='calendar-check' size={25} color="#4E4B59" />

                    <FontAwesome6 name='user-circle' size={25} color="#4E4B59" />
                </OptionsHomeDoctor>

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
                            statusList == "pendentes" ?
                                <TouchableOpacity onPress={() => setShowModalAppointment(true)}>
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
                                </TouchableOpacity>
                                :
                                <Cards
                                    Name={item.nome}
                                    Age={item.idade}
                                    Time={item.horarioConsulta}
                                    Type={item.tipoConsulta}
                                    SourceImage={item.image}
                                    Status={item.status}
                                    onPressCancel={() => { setShowModalCancel(true) }}
                                    onPressAppointment={() => navigation.navigate("ViewMedicalRecord")}
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

                    <FontAwesome6 name='user-circle' size={25} color="#4E4B59" />
                </OptionsHomeDoctor>

            </Container >

    )
}