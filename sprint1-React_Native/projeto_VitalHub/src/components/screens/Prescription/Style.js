import styled from "styled-components";

export const ImagePrescription = styled.Image` 
    width: 100%;
`

export const TitltePrescription =  styled.Text` 
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    align-self: center;
    color: #33303E;
    margin-top: 20px;
`

export const InputPrescription = styled.TextInput`
    width: 100%  ;
    height:${props => `${props.Height}px` };
    border:0px;
    background-color: #F5F3F3;
    align-self:center;
    border-radius:5px ;
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
    height: 44px;
    width: 60%;
    border-radius:5px;
    background-color:#49B3BA;
    justify-content: center;
    align-items: center;
`
export const TextBtnPhoto = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 14px;
    color: white;
    align-self: center;
`
export const BoxSubTextPrescription = styled.View`
    align-self: center;
    /* border: 1px solid black; */
    width: 45%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6px;
    margin-bottom: 8px;
`
export const TextBtnCancelar = styled(TextBtnPhoto)`
    color: #C81D25;
    font-size: 12px;
    font-family: "MontserratAlternates_500Medium";
`
export const BoxBtnPrescription = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 32px;
    align-items: center;
    align-self: center;
    width: 90%;
    margin-top: 10px;
`
export const Line = styled.View`
    margin-top: 19px;
    border: 2px solid #8C8A97;
    width: 90%;
    align-self: center;
    border-radius: 2px;
`
export const TxtReturn = styled(TextBtnPhoto)`
    color: #344F8F;
    text-decoration: underline;
    margin-top: 30px;
    margin-bottom: 42px;
`
export const ContentPhoto = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
    width: 45%;
`