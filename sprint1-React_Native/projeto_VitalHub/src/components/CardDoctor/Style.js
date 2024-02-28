import styled from "styled-components";

export const BoxCardDoctor = styled.View`
    height: 102px;
    width: 320px;
    background-color: white;
    border-radius:5px ;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    border: ${props => props.clickCard ? " 2px solid #496BBA" : "0px"};
    elevation: 3;
`
export const ImageCardDoctor = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
`
export const NameDoctor = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
    color: #33303E;
`
export const Specialty = styled.Text`
    color: #8C8A97;
    font-family: "Quicksand_500Medium";
    font-size: 14px;
`
export const BoxInformationDoctor = styled.View`
    justify-content: space-between;
    height: 43%;
    margin-left: 10px;
`
