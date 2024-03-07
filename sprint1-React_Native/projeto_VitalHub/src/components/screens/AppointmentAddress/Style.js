import styled from "styled-components";

export const ImgAppointmentAddress = styled.Image`
    height: 50%;
    width: 100%;
`

export const ContentAddress = styled.View`
    height: 50%;
    width: 100%;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
export const TitleAddress = styled.Text`
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    color: black;
    align-self: center;
    margin-top: 30px;
`
export const SubTxtAddress = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 20px;
    color: #4E4B59;
`

export const LabelAddress = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    color: #33303E;
`
export const InputAddress = styled.TextInput`
    width: ${props => `${props.Width}%` };
    height: 53px;
    border-radius: 5px;
    background-color: #F5F3F3;
`
export const ContentInputAddress = styled.View`
    width: ${props =>`${props.Width}%`};
    justify-content: center;
    align-items: flex-start;
    border: 1px solid black;
`
export const AlingAddress = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`