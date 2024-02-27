import { Image } from 'react-native'
import { ContainerHearderGradient } from '../../components/Header/Style'
import { SubTextHeader, TitleHeader } from '../Title/Style'
import { ContainerSafeArea } from "../../components/Header/Style"
import { ContainerHeader, ContainerHeaderText } from '../Container/Style'
import {MaterialIcons} from "@expo/vector-icons"

export const HeaderDefault = ({ textName, source}) => {
    return (

        <ContainerSafeArea>
            <ContainerHearderGradient>
                <ContainerHeader>
                    <Image  style={{borderRadius: 5, width: 60, height: 60}} source={source} />
                    <ContainerHeaderText>
                        <SubTextHeader>Bem vindo</SubTextHeader>
                        <TitleHeader>{textName}</TitleHeader>
                    </ContainerHeaderText>
                <MaterialIcons style={{marginLeft: 145, marginTop: 17}} name='notifications' size={25} color="#fbfbfb"/>
                </ContainerHeader>
            </ContainerHearderGradient>
        </ContainerSafeArea>

    )
}