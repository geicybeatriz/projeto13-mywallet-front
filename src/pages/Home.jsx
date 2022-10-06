import { useEffect, useState } from "react";
import TopBar from "../Components/TopBar/TopBar";
import Buttons from "../Components/Buttons/Buttons";
import Register from "../Components/Transitions/Register";
import axios from "axios";
import styled from "styled-components";

export default function Home(){
    const [userData, setUserData] = useState([]);
    const [registerList, setRegisterList] = useState([]);
    
    useEffect(() =>{
        const config = {headers: {Authorization: `Bearer `}};
        const URL_RegisterList = "https://back-projeto13-mywallet.herokuapp.com/home";
        const request = axios.get(URL_RegisterList, config);
        request.then((response) => {
            setUserData(response.data[1]);
            setRegisterList(response.data[0]);
        });
        request.catch((e) => console.log(e));
    }, [])

    return (
        <Container>
            <TopBar userData={userData}/>
            <Transactions>
                {registerList.length === 0 ? 
                    <Text>Não há registros de entrada ou saída</Text> 
                    : 
                    <Register registerList={registerList} setRegisterList={setRegisterList}/>}
            </Transactions>
            <Buttons setRegisterList={setRegisterList}/>
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    min-height:100vh;

    display: flex;
    flex-direction:column;
    align-items:center;

    background-color:#ffffff;
    padding:10px 24px;
`;

const Transactions = styled.div`
    width: 100%;
    height: 446px;

    background-color: #FFFFFF;
    border-radius: 5px;
    border:none;
`;

const Text = styled.div`
    width: 100%;
    height: 446px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;

    display:flex;
    justify-content:center;
    align-items:center;
`;