import styled from "styled-components";
import TopBar from "../TopBar/TopBar";
import Buttons from "../Buttons/Buttons";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context";
import Register from "../Transitions/Register";
import axios from "axios";
//import {useNavigate} from "react-router-dom";


export default function Home(){
    const {apiData} = useContext(UserContext);
    console.log(apiData);
    const [userData, setUserData] = useState({});
    const [registerList, setRegisterList] = useState([]);
    //const navigate = useNavigate();

    useEffect(() =>{
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_RegisterList = "http://localhost:5000/home";
        const request = axios.get(URL_RegisterList, config);
        request.then((response) => {
            console.log(response);
            setUserData(response);
            setRegisterList(response.data);
        });
        request.catch((e) => console.log(e));
    }, [apiData.token])


    return (
        <ContainerHome>
            <TopBar userData={userData}/>
            <Transations>
                {registerList.length === 0 ? 
                    <Text>Não há registros de entrada ou saída</Text> 
                    : 
                    registerList.map((data, i) => <Register key={i} data={data}/>)}
            </Transations>
            <Buttons setRegisterList={setRegisterList}/>
        </ContainerHome>
    );
}

const ContainerHome = styled.main`
    width: 100vw;
    height:100vh;

    display: flex;
    flex-direction:column;
    align-items:center;

    background-color:#915dbe;
    padding:10px 24px;
`;

const Transations = styled.div`
    width: 326px;
    height: 446px;

    background: #FFFFFF;
    border-radius: 5px;
    border:none;
`;

const Text = styled.div`
    width: 326px;
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