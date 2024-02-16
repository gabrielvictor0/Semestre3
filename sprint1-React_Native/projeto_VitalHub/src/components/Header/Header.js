import { Image } from 'react-native'
import { ContainerHearderGradient } from '../../components/Header/Style'
import { TitleHeader } from '../Title/Style'
import { ContainerSafeArea } from "../../components/Header/Style"
import { ContainerHeader } from '../Container/Style'

export const HeaderDefault = ({ textName, source }) => {
    return (

        <ContainerSafeArea>
            <ContainerHearderGradient>
                <ContainerHeader>
                    <Image source={source} />
                    <TitleHeader>{textName}</TitleHeader>
                </ContainerHeader>
            </ContainerHearderGradient>
        </ContainerSafeArea>

    )
}