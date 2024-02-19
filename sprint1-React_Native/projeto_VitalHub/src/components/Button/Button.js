import { ButtonTitleHome } from "../Title/Style"
import { ButtonDefaultHome } from "./Style"

export const ButtonHome = ({clickButton = false, onPress, textButton}) => {

    return (
        <ButtonDefaultHome clickButton={clickButton} onPress={onPress}>
            <ButtonTitleHome clickButton={clickButton}>
                {textButton}
            </ButtonTitleHome>
        </ButtonDefaultHome>
    )
}