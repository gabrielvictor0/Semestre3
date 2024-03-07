import styled from "styled-components";

export const ViewModalCheckAppointment = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ContainerCheckAppointment = styled.View`
    height: 554px;
    width: 335px;
    border-radius: 10px;
    background-color: white;
    padding-right: 27px;
    padding-left: 27px;
    align-items: center;

`
export const TitleCheckAppointment = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 20px;
    color: #33303E;
    align-self: center;
    margin-top: 30px;
`
export const SubTextCheckAppointment = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 16px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 10px;
`
export const LabelCheckAppintment = styled.Text`
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
    align-self: flex-start;
    color: #33303E;
    margin-top: 20px;
`
export const TextInformation = styled.Text`
    font-family: "Quicksand_500Medium";
    font-size: 14px;
    color: #8C8A97;
    align-self: flex-start;
`
export const TtxCancelCheckAppointment = styled.Text`
    color: #344F8F;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    text-decoration: underline;
    margin-top: 30px;
`

export const ButtonDefaultCheckAppointment = styled.TouchableOpacity`
    width: 100%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    justify-content: center;
    margin-top: 30%;
    align-self: center;
    position: relative;
    z-index: -1;
`