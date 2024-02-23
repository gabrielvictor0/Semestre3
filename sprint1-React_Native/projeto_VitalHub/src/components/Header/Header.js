import { Image } from 'react-native'
import { ContainerHearderGradient } from '../../components/Header/Style'
import { SubTextHeader, TitleHeader } from '../Title/Style'
import { ContainerSafeArea } from "../../components/Header/Style"
import { ContainerHeader, ContainerHeaderText } from '../Container/Style'
import {MaterialIcons} from "@expo/vector-icons"

export const HeaderDefault = ({ textName, source, subText }) => {
    return (

        <ContainerSafeArea>
            <ContainerHearderGradient>
                <ContainerHeader>
                    <Image source={source} />
                    <ContainerHeaderText>
                        <SubTextHeader>{subText}</SubTextHeader>
                        <TitleHeader>{textName}</TitleHeader>
                    </ContainerHeaderText>
                <MaterialIcons style={{marginLeft: 145, marginTop: 17}} name='notifications' size={25} color="#fbfbfb"/>
                </ContainerHeader>
            </ContainerHearderGradient>
        </ContainerSafeArea>

    )
}