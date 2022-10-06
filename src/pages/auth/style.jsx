import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerSign = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    background-color:#ffffff;
`;
export const ImgLogo = styled.img`
    width: 50px;
    height:50px;
    
`;
export const Div = styled.div`
    width:100%;

    display:flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
export const Logo = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-align:center;
    
    color: #6918b4;
`;
export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    gap:13px;
    margin: 24px 0;
    padding: 0 25px;
`;
export const Input = styled.input`
    width: 100%;
    height: 58px;

    background-color: #e9f0fb;
    border-radius: 5px;
    border: none;

    display:flex;
    align-items: center;
    padding-left: 15px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: ${props => props.disabled ? "#B2A8B8" : "#4c4452"};
    
    &::placeholder{
        width: 200px;
        height: 23px;

        color: ${props => props.disabled ? "#B2A8B8" : "#4c4452"};
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 46px;

    background-color: #6918b4;
    border-radius: 5px;
    border: none;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const Anchor = styled(Link)`
    width: 250px;
    height: 18px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #7ba6ea;
`;