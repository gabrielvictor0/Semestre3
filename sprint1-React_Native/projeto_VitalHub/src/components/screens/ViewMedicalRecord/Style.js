import styled from "styled-components";

export const InputViewMedicalRecord = styled.TextInput.attrs(({placeholderTextColor:  "#4E4B59"}))`
    height: ${props => props.Height};
    border: 0px;
    width: 100%;
    background-color: #F5F3F3;
    border-radius: 5px;
    margin-top: 10px;   
    padding: ${props => props.Padding} ;
`
export const TtxVoltar = styled.Text`
    color: #344F8F;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    text-decoration: underline;
    margin-top: 30px;
    margin-bottom: 64px;
`