import styled from "styled-components";

export const BoxModalSchedule = styled.View`
    width: 100%;
    height: 518px;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
    background-color: white;
`
export const TitleSchedule = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 20px;
    color: #33303E;
    margin-top:30px ;
    margin-bottom: 35px;
`
export const LabelInputSchedule = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: black;
`
export const InputSelect = styled.Picker.attrs(placeholderTextColor="#34898F")`
    width: 90%;
    border: 2px solid #60BFC5;
    border-radius: 5px;
`