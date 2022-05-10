import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerButtons = styled.div`
    width: 326px;

    display: flex;
    justify-content: space-between;
    align-items:center;

    padding-top:10px;
`;

export const Button = styled(Link)`
    width: 155px;
    height: 114px;

    background: #A328D6;
    border-radius: 5px;
    border:none;

    display:flex;
    flex-direction: column;
    justify-content:space-between;

    padding:10px;
`;

export const NameButton = styled.h2`
    width: 64px;
    height: 40px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align:left;

    color: #FFFFFF;
`;

