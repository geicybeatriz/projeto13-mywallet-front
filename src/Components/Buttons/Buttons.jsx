import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Link } from "react-router-dom";


export default function Buttons(){
    return(
        <ContainerButtons>
            <Button  to="/add-data">
                <AddCircleOutline
                    color={'#ffffff'} 
                    height="22px"
                    width="22px"
                />
                <NameButton>Nova entrada</NameButton>
            </Button >
            <Button to="/subtract-data">
                <RemoveCircleOutline
                    color={'#ffffff'} 
                    height="22px"
                    width="22px"
                />
                <NameButton>Nova saída</NameButton>
            </Button>
        </ContainerButtons>
    )
}

const ContainerButtons = styled.div`
    width: 326px;

    display: flex;
    justify-content: space-between;
    align-items:center;

    padding-top:10px;
`;

const Button = styled(Link)`
    width: 155px;
    height: 114px;

    background: #A328D6;
    border-radius: 5px;
    border:none;

    display:flex;
    flex-direction: column;
    justify-content:space-between;

    padding:10px;
`;

const NameButton = styled.h2`
    width: 64px;
    height: 40px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align:left;

    color: #FFFFFF;
`;
