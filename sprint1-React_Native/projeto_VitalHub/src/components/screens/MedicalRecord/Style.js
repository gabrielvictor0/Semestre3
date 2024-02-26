import styled from "styled-components";

export const ImageMedicalRecord = styled.Image` 
    height: 280px;
    width: 360px;
`

export const NameMedicalRecord = styled.Text` 
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    margin-top: 20px;
`
export const AgeMedicalRecord = styled.Text` 
    font-size: 14px;
    font-family: " Quicksand_500Medium";
    color: #4E4B59;
`
export const EmailMedicalRecord = styled(AgeMedicalRecord)` 
    font-size: 14px;
    font-family: " Quicksand_500Medium";
    color: #5F5C6B;
`
export const BoxInformationMedicalRecord = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 56%;
    margin-top: 10px;
    margin-bottom: 4px;
`
export const LabelInputMedicalRecord = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;

`
export const InputMedicalRecord = styled.TextInput.attrs(props => ({placeholderTextColor: `${props.editable == false ? "#34898F" : "#4E4B59"}`}))`
    height: ${props => props.Height};
    border: ${props => props.editable == false ? `1px solid #49B3BA` : "0px" };
    width: 100%;
    background-color: ${props => props.editable == false ? "white" : "#F5F3F3"};
    border-radius: 5px;
    margin-top: 10px;   
    padding: ${props => props.Padding} ;
`
export const BoxInputMedicalRecord = styled.View`
    align-items: flex-start;
    width: 90%;
    margin-top: 20px;
`
export const TextButtonCancel = styled.Text` 
    color: #344F8F;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    text-decoration: underline;
`