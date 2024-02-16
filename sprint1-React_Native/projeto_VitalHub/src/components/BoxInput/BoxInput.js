import { ContainerBoxInput } from "../Container/Style"
import {InputProfile } from "../Input/Style"
import {  TextLabel } from "../Label/Style"

export const BoxInput = ({textLabel, placeholder, fieldWidth = 100}) => {
    return(

        <ContainerBoxInput fieldWidth={fieldWidth}>
            <TextLabel>{textLabel}</TextLabel>
            <InputProfile placeholder={placeholder}/>
        </ContainerBoxInput>
    )
}