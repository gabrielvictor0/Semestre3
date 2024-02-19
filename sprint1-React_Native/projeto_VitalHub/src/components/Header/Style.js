import {LinearGradient} from "expo-linear-gradient"
import styled from "styled-components"

export const ContainerSafeArea = styled.SafeAreaView`
    height: 144px;
    width: 100%;
`

export const ContainerHearderGradient = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#496BBA"],
    start: { x: -0.5, y: 1.08 },
    end: { x: 1, y: 0 }
})`
    border-radius: 15px;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`