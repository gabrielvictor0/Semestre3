import { Image } from 'react-native'
import { ContainerHearderGradient } from '../../components/Header/Style'
import { SubTextHeader, TitleHeader } from '../Title/Style'
import { ContainerSafeArea } from "../../components/Header/Style"
import { ContainerHeader, ContainerHeaderText } from '../Container/Style'

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
                    <Image
                    style={{position: 'relative', left: 146, top: 18}}
                    source={require("../../assets/img/ion_notifcations.png")} />
                </ContainerHeader>
            </ContainerHearderGradient>
        </ContainerSafeArea>

    )
}