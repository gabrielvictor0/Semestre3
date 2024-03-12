import { ScrollView } from "react-native"
import { ImagePrescription } from "./Style"
import { Container } from "../../Container/Style"

export const Prescription = () => {
    return (
        <ScrollView>
            <Container>
                <ImagePrescription source={require("../../../assets/img/img_prescription.jpg")} />
            </Container>
        </ScrollView>
    )
}