import { useState } from "react";
import { ButtonHome } from "../../Button/Button";
import { CalendarHome } from "../../CalendarHome/CalendarHome";
import { Container, ContainerButtonHome } from "../../Container/Style";
import { HeaderDefault } from "../../Header/Header";
export const HomeDoctor = ({ }) => {
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
                    onPress={() =>setStatusList("pendentes")}
                />

               

                <ButtonHome
                    clickButton={statusList === "realizadas"}
                    onPress={() =>setStatusList("realizadas")}
                    textButton={"Realizadas"}
                />

                

                <ButtonHome
                     clickButton={statusList === "canceladas"}
                     onPress={() =>setStatusList("canceladas")}
                     textButton={"Canceladas"}
                />
            </ContainerButtonHome>

        </Container>
    )
}