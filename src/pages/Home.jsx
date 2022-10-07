import { useContext, useEffect, useState } from "react";
import TopBar from "../Components/TopBar/TopBar";
import Buttons from "../Components/Buttons/Buttons";
import Register from "../Components/Transitions/Register";
import styled from "styled-components";
import { UserContext } from "../contexts/userContext";
import transactionServices from "../services/transactionServices";

export default function Home(){
    const [registerList, setRegisterList] = useState([]);
    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}`}};

    useEffect(() =>{
        const promise = transactionServices.getTransactions(config);
        promise.then((response) => {
            console.log(response.data);
            setRegisterList(response.data);
        });
        promise.catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <TopBar />
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

    background-color: #e9f0fb;
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