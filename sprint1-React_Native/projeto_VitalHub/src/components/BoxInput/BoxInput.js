import { Label } from "../Label/Label";
import { FieldContent } from "./Style";
import { Input } from "../Input/Input";

export function BoxInput({placeholder, fieldWidth, textLabel}){
    return(
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>
            <Input placeholder={placeholder}/>
        </FieldContent>
    )
}