import { useState } from "react";
import { ButtonHome } from "../../Button/Button";
import { CalendarHome } from "../../CalendarHome/CalendarHome";
import { Container, ContainerButtonHome, ContainerCardHome } from "../../Container/Style";
import { HeaderDefault } from "../../Header/Header";
import { Cards } from "../../Cards/Cards";
import { FlatList } from "react-native";

import image from "../../../assets/img/img_person.jpg"
import { CancellationModal } from "../../CancellationModal/CancellationModal";
import { AppointmentModal } from "../../AppointmentModal/AppointmentModal";

const lista = [
    {
        id: "1",
        nome: "Nicole Sarga",
        idade: "22",
        horarioConsulta: "14:00",
        tipoConsulta: "Rotina",
        image: image,
        status: "pendentes"
    },
    {
        id: "2",
        nome: "Richard Kosta",
        idade: "28",
        horarioConsulta: "15:00",
        tipoConsulta: "Urgencia",
        image: image,
        status: "realizadas"
    },
    {
        id: "3",
        nome: "Gabriel Victor",
        idade: "28",
        horarioConsulta: "15:00",
        tipoConsulta: "Urgencia",
        image: image,
        status: "canceladas"
    }
]


export const Home = ({ navigation}) => {
    const [statusList, setStatusList] = useState("pendentes")
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)

    return (
        <Container>
            <HeaderDefault
                source={require("../../../assets/img/img_doctor.png")}
                subText={"Bem vindo"}
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
                    statusList == item.status &&(

                        <Cards
                            Name={item.nome}
                            Age={item.idade}
                            Time={item.horarioConsulta}
                            Type={item.tipoConsulta}
                            SourceImage={item.image}
                            Status={item.status}
                            onPressCancel={() => {setShowModalCancel(true)}}
                            onPressAppointment={() => {setShowModalAppointment(true)}}
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
            navigation={navigation}/>
            
            
        </Container>
    )
}