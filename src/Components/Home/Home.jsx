import {ContainerHome, Transations, Text } from "./style.jsx";
import TopBar from "../TopBar/TopBar";
import Buttons from "../Buttons/Buttons";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context";
import Register from "../Transitions/Register";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function Home(){
    const {apiData} = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [registerList, setRegisterList] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);

    useEffect(() =>{
        const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
        const URL_RegisterList = "https://back-projeto13-mywallet.herokuapp.com/home";
        const request = axios.get(URL_RegisterList, config);
        request.then((response) => {
            setUserData(response.data[1]);
            setRegisterList(response.data[0]);
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
                    <Register registerList={registerList} setRegisterList={setRegisterList}/>}
            </Transations>
            <Buttons setRegisterList={setRegisterList}/>
        </ContainerHome>
    );
}