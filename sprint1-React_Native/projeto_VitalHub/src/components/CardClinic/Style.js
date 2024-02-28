import styled from "styled-components";

export const BoxCardClinic = styled.View`
    width: 320px;
    height: 84px;
    border-radius: 5px;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 12px;
    border: ${props => props.clickCard ? "2px solid #496BBA" : "0px"};
`
export const NameClinic = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #33303E;
    margin-bottom: 10px;
`
export const Address = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: #4E4B59;
`
export const BoxDay = styled.View`
    width: 100px;
    height: 26px;
    border-radius: 5px;
    background-color: #E8FCFD;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`
export const TextDay = styled.Text` 
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: #49B3BA;
`
export const BoxNote = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin-bottom: 10px;
`

export const TextNote = styled.Text` 
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: #F9A620;
    align-self: center;
`
export const ContainerPrimary = styled.View`
    
`
export const ContainerSecond = styled.View`
    align-items: flex-end;
`