import styled from "styled-components";

export const ViewModalSchedule = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
justify-content: flex-end;
`

export const BoxModalSchedule = styled.View`
    width: 100%;
    height: 518px;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
    background-color: white;
    align-items: center;
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
    margin-bottom: 10px;
`
export const InputSelect = styled.TextInput.attrs({placeholderTextColor:"#34898F"})`
    width: 100%;
    border: 2px solid #60BFC5;
    border-radius: 5px;
    height: 53px;
    padding-left: 10px;
    font-family: "MontserratAlternates_600SemiBold";
`
export const BoxInputSchedule = styled.View` 
    align-items: flex-start;
    width: 90%;
    justify-content: center;
    margin-bottom: ${props => props.marginBottom};
`
export const BoxLevelAppointment = styled(BoxInputSchedule)` 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0px;
`
export const InputLevelAppointment = styled(InputSelect)` 
    width: 30%;
`
export const TextBtnCancelSchedule = styled.Text`
    text-decoration: underline;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #344F8F;
    align-self: center;
    margin-top: 30px;
`
export const BtnLevelAppointment = styled.TouchableOpacity`
    width: ${props => props.width};
    height: 40px;
    border-radius: 5px;
    border: 2px solid #60BFC5;
    background-color: ${props => props.clickButton ? "#60BFC5" : "white"};
    align-items: center;
    justify-content: center;
`
export const TextBtn = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color:${props => props.clickButton ? "white" : "#34898F"} ;
`