import { Label } from "../Label"
import { FieldContent } from "./style"
import { Input } from "../Input"

//definir props

export const BoxInput = ({
    fieldWidth= 100, 
    editable= false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null, 
    keyType = `default`,
    maxLenght = 11}) => {
    
    return(
        //FieldContent

        //Label

        //Input
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>
            <Input 
            placeholder={placeholder}
            editable={editable}
            keyType={keyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />
        </FieldContent>
    )
}