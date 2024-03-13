import { StyleSheet } from "react-native"
import { Container, ContentMap } from "../../Container/Style"
import { AlingAddress, ContentAddress, ContentInputAddress, ImgAppointmentAddress, InputAddress, LabelAddress, SubTxtAddress, TitleAddress } from "./Style"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MapsLocation } from "../../MapsLocation/MapsLocation"

export const AppointmentAddress = () => {
    return (
        <Container>
            <ContentMap>
                <MapsLocation/>
            </ContentMap>

            <ContentAddress>
                <TitleAddress>Clinica Natureh</TitleAddress>
                <SubTxtAddress>São Paulo,SP</SubTxtAddress>

                <ContentInputAddress Width={90}>
                    <LabelAddress>Endereço</LabelAddress>
                    <InputAddress
                        Width={100}
                        editable={false}
                    />
                </ContentInputAddress>

                <AlingAddress>

                    <ContentInputAddress Width={40}>
                        <LabelAddress>Número</LabelAddress>
                        <InputAddress
                            Width={100}
                            editable={false}
                        />
                    </ContentInputAddress>

                    <ContentInputAddress Width={55}>
                        <LabelAddress>Bairro</LabelAddress>
                        <InputAddress
                            Width={100}
                            editable={false}
                        />
                    </ContentInputAddress>

                </AlingAddress>
            </ContentAddress>
        </Container>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        height: '100%',
        width: '100%'
    }

});