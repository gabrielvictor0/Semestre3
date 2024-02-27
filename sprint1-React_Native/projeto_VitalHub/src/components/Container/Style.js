import styled from "styled-components"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    position: fixed;
    background-color: #fbfbfb;
    
`
export const ContainerInputLogin = styled.View`
    width: 90%;
    align-items: center;
`
export const ContainerGoogle = styled.View`
    flex-direction: row;
    width: 58%;
    
    justify-content: space-between;
    align-items: center;
`
export const ContentAccount = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 30px;
`

export const ContainerTextRecoverPassword = styled.View`
    width: 85%;
`
 
export const ContainerCheckCode = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`

export const ContainerSubText = styled(ContainerTextRecoverPassword)`
    width: 75%;
`

//profile
export const ContainerSroll = styled.ScrollView`
   
   width: 100%;
`
export const ContainerBoxInput = styled(ContainerInputLogin)`
 width: ${props => `${props.fieldWidth}%`};
 margin-top: 24px;
`
export const ContainerInputSmall = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */
`
export const ContainerFormProfile = styled.View`
    width: 90%;
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 41px;
`
export const ContainerHeader = styled.View`
    width: 90%;
    flex-direction: row;
    margin-bottom: 18px;
`
export const ContainerHeaderText = styled.View`
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
`
export const ContainerButtonHome = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: auto;
    align-items: center;
    margin-bottom: 8px;
`