import { TouchableOpacity } from "react-native"
import { BoxHour, ContentHour, Hour } from "./Style"

export const ButtonSelectHour = ({ setStatusSelect, TxtHour }) => {
    return (

        <BoxHour>
                <Hour>{TxtHour}</Hour>
        </BoxHour>


    )
}