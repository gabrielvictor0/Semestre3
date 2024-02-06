import styled from "styled-components";

export const ButtonEntrar = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    justify-content: center;
    margin-top: 30px;
`
export const ButtonGoogle = styled(ButtonEntrar)`
    border: 1px solid #496BBA;
    background-color:#FAFAFA;
    margin-top: 15px;
    align-items: center;
`
export const ButtonOut = styled.TouchableOpacity`
     position: absolute;
    margin-top: 85px;
    margin-left: 20px;
    align-self: flex-start;
`