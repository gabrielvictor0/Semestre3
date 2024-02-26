import styled, { css } from "styled-components";

export const ButtonDefault = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    justify-content: center;
    margin-top: 30px;
    align-self: center;
`
export const ButtonGoogle = styled(ButtonDefault)`
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
export const ButtonProfile = styled(ButtonDefault)`
    width: 100%;
`

export const ButtonDefaultHome = styled(ButtonDefault)`
    width: 31%;
    height: 39px;
    margin-top: 0px;
    ${props => props.clickButton ? css`
        background-color: #496bba;
        height: 35px;
        `
        : css`
            background-color: transparent;
            border: 2px solid #607EC5;
        `}
`