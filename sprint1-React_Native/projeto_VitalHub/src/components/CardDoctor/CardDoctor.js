import { BoxCardDoctor, BoxInformationDoctor, ImageCardDoctor, NameDoctor, Specialty } from "./Style"

export const CardDoctor = ({ TxtNameDoctor, TxtSpecialty, clickCard}) => {
    return (
        <BoxCardDoctor clickCard={clickCard}>
            <ImageCardDoctor source={require("../../assets/img/walter.jpg")}/>
            <BoxInformationDoctor>
                <NameDoctor>{TxtNameDoctor}</NameDoctor>
                <Specialty>{TxtSpecialty}</Specialty>
            </BoxInformationDoctor>
        </BoxCardDoctor>
    )
}