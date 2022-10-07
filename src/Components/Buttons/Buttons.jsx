import { useContext } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TransactionContext } from "../../contexts/transactionContext";

export default function Buttons(){
    const { setTypeTransaction } = useContext(TransactionContext);
    const navigate = useNavigate();

    function addTransaction(type){
        localStorage.setItem("type", type);
        setTypeTransaction(type);
        navigate("/addData");
    }

    return(
        <ContainerButtons>
            <Button onClick={() => addTransaction("entrada")} >
                <IoAddCircleOutline color={'#ffffff'} size="23px"/>
                <NameButton>Nova entrada</NameButton>
            </Button >
            <Button onClick={() => addTransaction("saida")}>
                <IoRemoveCircleOutline color={'#ffffff'} size="23px"/>
                <NameButton>Nova saída</NameButton>
            </Button>
        </ContainerButtons>
    )
}

const ContainerButtons = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:10px;
    margin-top:10px;
`;

const Button = styled.div`
    width: 100%;
    height: 60px;

    background: #6918b4;
    border-radius: 5px;
    border:none;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:5px;
    padding: 0 5px;
`;

const NameButton = styled.h2`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    text-align:left;

    color: #FFFFFF;
`;