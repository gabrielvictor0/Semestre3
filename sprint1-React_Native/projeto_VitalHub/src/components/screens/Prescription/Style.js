import styled from "styled-components";

export const ImagePrescription = styled.Image` 
    width: 100%;
`

export const TitltePrescription =  styled.Text` 
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    align-self: center;
    color: #33303E;
`

export const InputPrescription = styled.TextInput`
    width: 100%  ;
    height:${props => `${props.Height}px` };
    border:0px;
    background-color: #F5F3F3;
    align-self:center;
    margin-top: 10px;
`
export const BoxInputPrescription = styled.View`
    width: 90%;
    align-items: flex-start;
    align-self: center;
    margin-top: 20px;
`

export const SubTextPrescription = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_500Medium";
    color: #5F5C6B;
`
export const LabelPrescription = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    color: #33303E;
`
export const ButtonPhoto = styled.TouchableOpacity`
    height: 30%;
    width: 40%;
    border:5px;
    background-color:#49B3BA;
`

