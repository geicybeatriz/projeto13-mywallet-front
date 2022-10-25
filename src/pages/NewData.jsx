import { useContext, useState } from "react";
import { TransactionContext } from "./../contexts/transactionContext.js";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import transactionServices from "../services/transactionServices.js";
import { UserContext } from "../contexts/userContext.js";
import Swal from "sweetalert2";

export default function NewData(){
  const { typeTransaction } = useContext(TransactionContext);
  const [data, setData] = useState({amount:0 , description:"", type:`${typeTransaction}`});
  const navigate = useNavigate();
  const {token} = useContext(UserContext);
  const config = {headers: {Authorization: `Bearer ${token}`}};


  function submitNewData(e){
    e.preventDefault();

    const promise = transactionServices.addTransaction(data, config);
    promise.then(() => navigate("/home"));
    promise.catch((error) => {
      console.log(error);
      Swal.fire('Erro', `${error.response.data}`, 'error');
    })
  }

  return (
    <>
      <Container>
          <TopText>
            <IoArrowBack color="#6918b4" size="30px" onClick={() => navigate("/home")}/>
            <Title>{`Nova ${typeTransaction}`}</Title>
          </TopText>
          <ContainerInputs onSubmit={submitNewData}>
              <Input placeholder="Valor"
                      type="number" 
                      value={data.amount}
                      onChange={(e) => setData({...data, amount: parseFloat(e.target.value)})}
              />
              <Input placeholder="Descrição"
                  type="text" 
                  value={data.description}
                  onChange={(e) => setData({...data, description: e.target.value})}
              />
              <Button type="submit">{`Salvar ${typeTransaction}`}</Button>
          </ContainerInputs>
      </Container>
    </>
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

const TopText = styled.div`
    width: 100%;
    height: 70px;

    display:flex;
    align-items:center;
    gap: 15px;
`;

const Title = styled.h1`
    width: 250px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;

    color: #6918b4;
`;

const ContainerInputs= styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 13px;
`;

const Input = styled.input`
    width: 100%;
    height: 58px;

    background-color: #e9f0fb;
    border-radius: 5px;
    border:none;

    display:flex;
    align-items: center;

    padding:0 15px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #4c4452;
    
    &::placeholder{
        width: 200px;
        height: 23px;

        color: #4c4452;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 46px;

    background-color: #6918b4;
    border-radius: 5px;
    border: none;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    color: #FFFFFF;
    display:flex;
    align-items: center;
    justify-content: center;
`;