import { Address, BoxCardClinic, BoxDay, BoxNote, ContainerPrimary, ContainerSecond, NameClinic, TextDay, TextNote } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export const CardClinic = ({ TextNameClinic, TextAddress, Day, Note }) => {
    return (
        <BoxCardClinic>

            <ContainerPrimary>
                <NameClinic>{TextNameClinic}</NameClinic>

                <Address>{TextAddress}</Address>
            </ContainerPrimary>

            <ContainerSecond>
                <BoxNote>
                    <Octicons name="star-fill" size={25} color={"#F9A620"}/>
                    <TextNote>{Note}</TextNote>
                </BoxNote>

                <BoxDay>
                    <MaterialCommunityIcons name="calendar" size={25} />
                    <TextDay>{Day}</TextDay>
                </BoxDay>

            </ContainerSecond>

        </BoxCardClinic>
    )
}