import styled from "styled-components";

export const ContainerCard = styled.View` 
    width: 100%;
    border: 1px solid black;
`
export const BoxCard = styled.View`
    border-radius: 5px;
    height: 102px;
    width: 320px;
    background-color: white;
    flex-direction: row;
    align-self: center;
    margin-top: 12px;
    elevation: 3;
`
export const TextName = styled.Text`
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #33303E;
    align-self: center;
`
export const TextAge = styled.Text`
    font-family: "Quicksand_400Regular";
    font-size: 14px;
    color: #8C8A97;
`
export const TextTime = styled.Text`
    color: ${props => props.Status == "pendentes" ? "#49B3BA" : "#4E4B59"};
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    
`
export const TextType = styled.Text`
    color: #4E4B59;
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
`

export const TextCancel = styled.Text`
    color: ${(props) => props.Status == "pendentes" ? "#c81d25" : "#344f8f"} ; 
    font-size: 12px;
    font-family: "MontserratAlternates_500Medium";
`
export const ButtonCard = styled.TouchableOpacity`
    align-self: flex-end;
    margin-left: ${(props) => props.Status == "realizadas" ? "20px" : "47px"};
    margin-bottom:15px;
`
export const BoxCardInformation = styled.View`
    justify-content: space-between;
    width: 33%;
    height: 80%;
    align-self: center;
    margin-left: 10px;
`

export const BoxCardText = styled.View`
    flex-direction: row;
    width: min-content;
    align-self: center;
    justify-content: space-between;
   
`
export const ImageCard = styled.Image`
    height: 80px;
    width: 77px;
    border-radius: 5px;
    align-self: center;
    margin-left: 10px;
`
export const BoxCardTime = styled.View`
    width: 100px;
    height: 26px;
    border-radius: 5px;
    background-color: ${props => props.Status == "pendentes" ? "#E8FCFD" : "#F1F0F5"};
    align-self: center;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const BoxTime = styled.View`
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`