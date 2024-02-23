import styled from "styled-components";

export const ContainerAppointment = styled.View`
    width: 334px;
    height: 436px;
    color: white;
    border-radius: 10px;
    align-items: center;
`
export const ImageAppointment = styled.Image`
    width: 285px;
    height: 181px;
    border-radius: 10px;
    margin: 30px 24px 20px 24px;

`
export const TitleAppointment = styled.Title`
    font-size: 20px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #33303E;
`
export const TextAgeAppointment = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_500Medium";
    color: #5F5C6B;
    margin: 0px 20px 0px 47px ;
`
export const TextEmailAppointment = styled(TextAgeAppointment)`
    margin: 0px 47px 0px 0px ;
`
export const ButtonAppointmentCancel = styled.TouchableOpacity`
margin-top: 1px;
`
export const TextButtonAppointment = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    text-decoration: underline;
    color: #344F8F;
    font-size: 14px;
`