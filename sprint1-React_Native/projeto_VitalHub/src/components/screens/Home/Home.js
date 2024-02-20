import { useState } from "react";
import { ButtonHome } from "../../Button/Button";
import { CalendarHome } from "../../CalendarHome/CalendarHome";
import { Container, ContainerButtonHome, ContainerCardHome } from "../../Container/Style";
import { HeaderDefault } from "../../Header/Header";
import { Cards } from "../../Cards/Cards";
import { FlatList } from "react-native";

// const Lista = [
//     {
//         id: "1",
//         nome: "Nicole Sarga",
//         idade: "22",
//         horarioConsulta: "14:00",
//         tipoConsulta: "Rotina"
//     },
//     {
//         id: "2",
//         nome: "Richard Kosta",
//         idade: "28",
//         horarioConsulta: "15:00",
//         tipoConsulta: "Urgencia"
//     }
// ]

export const Home = ({ }) => {
    const [statusList, setStatusList] = useState("")
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

            <ContainerCardHome>
                <Cards
                    Name={"Gabriel Victor"}
                    Age={"17"}
                    Time={"14:00"}
                    Type={"Rotina"}
                    SourceImage={require("../../../assets/img/img_person.jpg")}
                />
            </ContainerCardHome>

        </Container>
    )
}