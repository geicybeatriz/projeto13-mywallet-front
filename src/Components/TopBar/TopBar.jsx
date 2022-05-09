import styled from "styled-components";
import sair from "./../../assets/img/sair.svg"

export default function TopBar(props){
    const {userData} = props;
    return (
        <Header >
            <Title>Olá, {userData.name}</Title>
            <LogOut src={sair} alt="encerrar sessão"/>
        </Header>
    )
}

const Header = styled.div`
    width: 326px;
    height: 70px;

    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const Title = styled.h1`
    width: 250px;
    height: 31px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #FFFFFF;
`;

const LogOut = styled.img`
    width: 23px;
    height: 24px;
    color: #ffffff;
`;