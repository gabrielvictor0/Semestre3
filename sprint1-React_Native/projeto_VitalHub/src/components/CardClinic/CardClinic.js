import { Address, BoxCardClinic, BoxDay, BoxNote, ContainerPrimary, ContainerSecond, NameClinic, TextDay, TextNote } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const CardClinic = ({ TextNameClinic, TextAddress, Day, Note, clickCard}) => {
    return (
        
            <BoxCardClinic clickCard={clickCard}> 

                <ContainerPrimary>
                    <NameClinic>{TextNameClinic}</NameClinic>

                    <Address>{TextAddress}</Address>
                </ContainerPrimary>

                <ContainerSecond>
                    <BoxNote>
                        <Octicons name="star-fill" size={25} color={"#F9A620"} />
                        <TextNote>{Note}</TextNote>
                    </BoxNote>

                    <BoxDay>
                        <MaterialCommunityIcons name="calendar" size={25} color={"#49B3BA"} />
                        <TextDay>{Day}</TextDay>
                    </BoxDay>

                </ContainerSecond>

            </BoxCardClinic>
        

    )
}