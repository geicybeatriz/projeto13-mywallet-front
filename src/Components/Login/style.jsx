import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerLogin = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    background-color:#915dbe;
`;
export const Logo = styled.h1`
    width: 147px;
    height: 50px;

    font-family: 'Playball' cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;

    color: #FFFFFF;
`;
export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    gap:13px;
    margin: 24px 0;
`;
export const Input = styled.input`
    width: 326px;
    height: 58px;

    background-color: #FFFFFF;
    border-radius: 5px;
    border: none;

    padding-left: 15px;
    
    &::placeholder{
        width: 59px;
        height: 23px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #000000;
    }
`;
export const Button = styled.button`
    width: 326px;
    height: 46px;

    background-color: #A328D6;
    border-radius: 5px;
    border: none;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
`;
export const Anchor = styled(Link)`
    width: 191px;
    height: 18px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;
`;