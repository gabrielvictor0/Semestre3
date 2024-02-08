import { Image } from "react-native"
import { BoxInput } from "../../BoxInput/BoxInput"
import { Container, ContainerSroll } from "../../Container/Style"

export const Profile = () => {
    return(
        <ContainerSroll>
            <Container>
                <Image source={require("../../../assets/img/img_profile.png")}/>
                <BoxInput 
                textLabel={"Data de nascimento: "}
                placeholder={"dd/mm/aaaa"}/>

            </Container>
        </ContainerSroll>
    )
}