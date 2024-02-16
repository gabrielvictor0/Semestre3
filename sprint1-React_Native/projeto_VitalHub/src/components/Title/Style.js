import styled from "styled-components"

export const Title = styled.Text`
    font-size: 20px;
    color: #33303E;
    font-family: "MontserratAlternates_600SemiBold";
    margin-bottom: 5px;
`
export const ButtonTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    color: white;
    align-self: center;
    font-size: 14px;
`

export const ButtonTitleGoogle = styled(ButtonTitle)`
    color:#496BBA;
`

export const TextAccount = styled.Text`
    font-size: 14px;
    color: #4E4B59;
    font-family: "MontserratAlternates_600SemiBold";
`
export const TextLink = styled(TextAccount)`
    color: #4D659D;
    text-decoration: underline;
`
export const TitleRecoverPassword = styled(Title)`
    margin-top: 25px;
`

export const SubText = styled.Text`
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 16px;
    font-family: "Quicksand_500Medium";
    color: #5F5C6B;
    text-align: center;
`
export const SubTextEmail = styled(SubText)`
    color: #4E4B59;
`
export const TextEmail = styled(SubText)`
    color: #496BBA;
`
export const TextResendCode = styled(TextLink)`
    margin-top: 30px;
    color: #344F8F;
`
export const SubTextProfile = styled(SubText)`
    margin-bottom: 0px;
    color: #4E4B59;
    margin-top: 10px;
`
export const TitleHeader = styled(Title)`
    color: #FBFBFB;
    font-size: 16px;
`