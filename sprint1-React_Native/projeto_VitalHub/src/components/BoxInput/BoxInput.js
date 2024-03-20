import { ContainerBoxInput } from "../Container/Style"
import {InputProfile } from "../Input/Style"
import {  TextLabel } from "../Label/Style"

export const BoxInput = ({textLabel, placeholder, fieldWidth = 100, keyType = `default`, editable}) => {
    return(

        <ContainerBoxInput fieldWidth={fieldWidth}>
            <TextLabel>{textLabel}</TextLabel>
            <InputProfile editable={editable} placeholder={placeholder} keyboardType={keyType}/>
        </ContainerBoxInput>
    )
}