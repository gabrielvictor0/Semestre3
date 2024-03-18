import { useState } from "react";
import { ButtonHome } from "../../Button/Button";
import { CalendarHome } from "../../CalendarHome/CalendarHome";
import { Container, ContainerButtonHome } from "../../Container/Style";
import { HeaderDefault } from "../../Header/Header";
import { Cards } from "../../Cards/Cards";
import { FlatList, TouchableHighlight, TouchableOpacity } from "react-native";

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
        id: "12",
        nome: "Rogerio",
        idade: "19",
        horarioConsulta: "14:20",
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
        id: "8",
        nome: "Dr. Cirilo",
        idade: "46",
        horarioConsulta: "16:00",
        tipoConsulta: "Rotina",
        status: "pendentes",
        typeUser: "medico",
        image: image
    },
    {
        id: "9",
        nome: "Dr. Mike",
        idade: "33",
        horarioConsulta: "15:30",
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
                <TouchableOpacity 
                style={{width: "100%"}}
                onPress={() => navigation.navigate("Profile")}>
                    <HeaderDefault
                        source={require("../../../assets/img/walter.jpg")}
                        textName={"Walter"} />
                </TouchableOpacity>

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
                    style={{width: "100%"}}
                    contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        statusList == item.status && item.typeUser == 'medico' && (
                            statusList == "pendentes"
                                ?
                                <TouchableOpacity 
                                onPress={() => setModalAppointmentLocation(true)}>
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
                                :
                                <Cards
                                    Name={item.nome}
                                    Age={item.idade}
                                    Time={item.horarioConsulta}
                                    Type={item.tipoConsulta}
                                    Status={item.status}
                                    SourceImage={item.image}
                                    onPressCancel={() => { setShowModalCancel(true) }}
                                    onPressAppointment={() => navigation.navigate("Prescription")}
                                />

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
                    navigation={navigation}
                />

            </Container>
            :
            < Container >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                    style={{ width: "100%" }}>
                    <HeaderDefault
                        source={require("../../../assets/img/pinkman.jpg")}
                        textName={"Dr. Claudio"} />
                </TouchableOpacity>

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
                    style={{width: "100%"}}
                    contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        statusList == item.status && item.typeUser == "paciente" && (
                            statusList == "pendentes" ?
                                <TouchableOpacity 
                                onPress={() => setShowModalAppointment(true)}>
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
                    navigation={navigation}
                />

                <AppointmentModal
                    visible={showModalAppointment}
                    setShowModalAppointment={setShowModalAppointment}
                    navigation={navigation} />


            </Container >

    )
}