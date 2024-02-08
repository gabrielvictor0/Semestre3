import styled from "styled-components";

export const InputDefault = styled.TextInput.attrs({placeholderTextColor: '#49B3BA'})`
    width: 100%;
    height: 53px;
    margin-top: 15px;
    padding: 16px;
    
    border-radius: 5px;
    border:2px solid #49B3BA;
    color: #49B3BA;
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
`
export const Input = styled(InputDefault)`
    width: 90%;
`
export const InputProfile = styled(Input)`
    border: none;
    background-color: #F5F3F3;
    font-size: 14px;
    font-family: "Quicksand_500Medium";
`

export const CheckCode = styled.TextInput.attrs({placeholderTextColor: '#34898F'})`
    border: 2px solid #77CACF;
    width: 65px;
    height: 62px;
    border-radius: 5px;
    padding-left: 21px;
    padding-bottom: 5px;
    color: #34898F ;
    font-size: 40px;
    font-family: "Quicksand_600SemiBold";
`