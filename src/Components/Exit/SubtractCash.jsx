import {Container, NewEntry, Title, ContainerInputs, Input, Button} from "./../Entry/style.jsx";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context";
import { useNavigate } from "react-router-dom";

export default function SubtractCash(){
    const {apiData} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
    const [requestData, setRequestData] = useState({})
    const navigate = useNavigate();

    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);

    function submitNewData(e){
        e.preventDefault();
        setRequestData({...requestData, type:"saida"})
        console.log("new", requestData);

        const URL = "https://back-projeto13-mywallet.herokuapp.com/home";
        const promise = axios.post(URL, requestData, config);
        promise.then(() => navigate("/home"));
        promise.catch((erro) => {
            console.log("erro", erro);
        })
    }

    return (
        <Container>
            <NewEntry>
                <Title>Nova saída</Title>
            </NewEntry>
            <ContainerInputs onSubmit={submitNewData}>
                <Input type="number" 
                        value={requestData.amount}
                        onChange={(e) => setRequestData({...requestData, amount: e.target.value})}
                        placeholder="Valor"/>
                <Input placeholder="Descrição"
                        type="text" 
                        value={requestData.description}
                        onChange={(e) => setRequestData({...requestData, description: e.target.value})}
                />
                <Button type="submit">Salvar Saída</Button>
            </ContainerInputs>
        </Container>
    );
}