import styled from "styled-components/native";

export const ViewModalAppointment = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`
export const ContainerAppointment = styled.View`
    width: 334px;
    height: 436px;
    background-color: white;
    border-radius: 10px;
    align-items: center;
`
export const ImageAppointment = styled.Image`
    width: 285px;
    height: 181px;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
`
export const NameAppointment = styled.Text`
    font-size: 20px;
    color: #33303E;
    font-family: "MontserratAlternates_600SemiBold";
    margin-bottom: 17px;
`
export const TextAppointment = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_500Medium";
    color: #4E4B59;
`
export const BoxTextAppointment = styled.View`
    width: 211px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ButtonCancelAppointment = styled.TouchableOpacity`
    margin-top: 30px;
`
export const TextBtnCancelAppointment = styled.Text`
    text-decoration: underline;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #344F8F;
    align-self: center;
`