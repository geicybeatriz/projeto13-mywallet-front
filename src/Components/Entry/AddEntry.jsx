import {Container, NewEntry, Title, ContainerInputs, Input, Button} from "./style.jsx";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/context";
import { useNavigate } from "react-router-dom";

export default function AddCash(){
    const {apiData} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${apiData.token}`}};

    const [newEntrada, setNewEntrada] = useState({})
    const navigate = useNavigate();
    useEffect(() => !apiData.token && navigate("/"), [apiData.token, navigate]);

    function submitNewData(e){
        e.preventDefault();
        console.log("new", newEntrada);

        const URL = "https://back-projeto13-mywallet.herokuapp.com/home";
        const promise = axios.post(URL, newEntrada, config);
        promise.then(() => navigate("/home"));
        promise.catch((erro) => {
            console.log("erro", erro);
        })
    }
    return (
        <Container>
            <NewEntry>
                <Title>Nova entrada</Title>
            </NewEntry>
            <ContainerInputs onSubmit={submitNewData}>
                <Input placeholder="Valor"
                        type="number" 
                        value={newEntrada.amount}
                        onChange={(e) => setNewEntrada({...newEntrada, amount: parseFloat(e.target.value)})}
                />
                <Input placeholder="Descrição"
                    type="text" 
                    value={newEntrada.description}
                    onChange={(e) => setNewEntrada({...newEntrada, description: e.target.value, type:"entrada"})}
                />
                <Button type="submit">Salvar Entrada</Button>
            </ContainerInputs>
        </Container>
    );
}