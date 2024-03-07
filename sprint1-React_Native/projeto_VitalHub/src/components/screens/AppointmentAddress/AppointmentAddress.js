import { Container } from "../../Container/Style"
import { AlingAddress, ContentAddress, ContentInputAddress, ImgAppointmentAddress, InputAddress, LabelAddress, SubTxtAddress, TitleAddress } from "./Style"

export const AppointmentAddress = () => {
    return (
        <Container>
            <ImgAppointmentAddress source={require("../../../assets/img/mapa.jpg")} />
            <ContentAddress>
                <TitleAddress>Clinica Natureh</TitleAddress>
                <SubTxtAddress>São Paulo,SP</SubTxtAddress>

                <ContentInputAddress Width={90}>
                    <LabelAddress>Endereço</LabelAddress>
                    <InputAddress
                        Width={100} />
                </ContentInputAddress>

                <AlingAddress>

                    <ContentInputAddress Width={40}>
                        <LabelAddress>Número</LabelAddress>
                        <InputAddress Width={100} />
                    </ContentInputAddress>
                    <ContentInputAddress Width={45}>
                        <LabelAddress>Bairro</LabelAddress>
                        <InputAddress Width={100} />
                    </ContentInputAddress>
                </AlingAddress>
            </ContentAddress>
        </Container>
    )
}