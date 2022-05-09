import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../Context/context";
import { useNavigate } from "react-router-dom";

export default function SubtractCash(){
    const {apiData} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${apiData.token}`}};

    const [requestData, setRequestData] = useState({})
    const navigate = useNavigate();

    function submitNewData(e){
        e.preventDefault();
        setRequestData({...requestData, type:"saida"})
        console.log("new", requestData);

        const URL = "http://localhost:5000/home";
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

//styles

const Container = styled.main`
    width: 100vw;
    height:100vh;

    display: flex;
    flex-direction:column;
    align-items:center;

    background-color:#915dbe;
    padding:10px 24px;
`;

const NewEntry = styled.div`
    width: 326px;
    height: 70px;

    display:flex;
    justify-content: space-between;
    align-items:center
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

const ContainerInputs= styled.form`
    width: 326px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 13px;
`;
const Input = styled.input`
    width: 326px;
    height: 58px;

    background: #FFFFFF;
    border-radius: 5px;
    border:none;

    display:flex;
    align-items: center;

    padding-left: 15px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #4c4452;
    
    &::placeholder{
        width: 200px;
        height: 23px;

        color: #4c4452
    }
`;

const Button = styled.button`
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
    display:flex;
    align-items: center;
    justify-content: center;
`;