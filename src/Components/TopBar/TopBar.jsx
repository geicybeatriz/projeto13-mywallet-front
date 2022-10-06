import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export default function TopBar(props){
    const {userData} = props;
    const navigate = useNavigate();

    const token = useContext(UserContext);
    function exit(){
        const config = {headers: {Authorization: `Bearer ${token}`}};
        const URL_logOut = "https://back-projeto13-mywallet.herokuapp.com/home";
        const request = axios.put(URL_logOut, {},config);
        request.then(() => {
            console.log("encerrou a sessão");
            navigate("/");
        });
        request.catch((e) => console.log(e));
        }
    
    return (
        <Header >
            <Title>Olá, {userData.name}</Title>
            <LogOut src="" alt="encerrar sessão" onClick={exit}/>
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