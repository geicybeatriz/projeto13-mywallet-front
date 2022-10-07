import { useContext } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { BiLogOut } from "react-icons/bi";
import transactionServices from "../../services/transactionServices";
import Swal from "sweetalert2";

export default function TopBar(){
    const navigate = useNavigate();
    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}`}};

    function exit(){
        Swal.fire({
            title: 'Tem certeza?',
            showCancelButton: true,
            confirmButtonText: 'Sim!',
            cancelButtonText:'Não!',
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
            } 
        })
        
        function logOut(){
            const request = transactionServices.logOut(config);
            request.then(() => navigate("/"));
            request.catch((e) => console.log(e));
            }
        }
    
    return (
        <Header >
            <Title>Minha conta</Title>
            <BiLogOut size="25px" color="#6918b4" alt="encerrar sessão" onClick={exit}/>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 70px;

    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const Title = styled.h1`
    width: 100%;
    height: 31px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    color: #6918b4;
`;
