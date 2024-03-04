import styled from "styled-components";

export const ContainerSelecDate = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #FBFBFB;
    align-items: center;
`
export const TitleCalendar = styled.Text`
    color: #33303E;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 20px;
    align-self: center;
`

export const InputSelectCalendar = styled.TextInput.attrs({placeholderTextColor: "#34898F"})`
    width: 90%;
    height: 53px;
    border: 2px solid #60BFC5;
    border-radius: 5px;
    align-self: center;
    padding-left: 10px;
`
export const LabelInputCalendar = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    color: black;
    margin-left: 5.5%;
    margin-bottom: 10px;
    align-self: flex-start;
`