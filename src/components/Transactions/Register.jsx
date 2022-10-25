import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import transactionServices from "../../services/transactionServices";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import styled from "styled-components";

export default function Register({registerList, getTransactions}){
    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}`}};
    
    let total = 0;
    for(let i = 0; i < registerList.length; i++){
        if(registerList[i].type === "entrada"){
            total += registerList[i].amount;
        } else{
            total -= registerList[i].amount;
        }
    }

    function deleteItem(id){
        Swal.fire({
            title: 'Tem certeza?',
            showCancelButton: true,
            confirmButtonText: 'Sim!',
            cancelButtonText:'Não!',
        }).then((result) => {
            if (result.isConfirmed) {
                const promise = transactionServices.deleteTransaction(id, config);
                promise.then(() => {
                    getTransactions();
                });
                promise.catch(erro => console.log(erro));
            } 
        });
    }
    
    return(
        <Container>
            <List>
                {registerList.map((item, id) => 
                    <ContainerCash id={item._id} key={id}>
                        <Div>
                            <Date>{item.createdAt}</Date>
                            <Description>{item.description}</Description>
                            <Valor type={item.type}>{((item.amount).toFixed(2)).replace('.',',')}</Valor>
                        </Div>
                        <TiDelete size="20px" color="#6918b4" onClick={() => deleteItem(item._id)}/>
                    </ContainerCash>
                )}
            </List>
            <Total>
                <Text>Saldo</Text>
                <Result type={(total===0) ? "neutro": (total>0) ? "lucro" : "prejuízo"}>
                    {(Math.round(total).toFixed(2)).replace('.',',')}
                </Result>
            </Total>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 446px;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const List = styled.div`
    width: 100%;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    gap:5px;
    padding:0 10px;
`;

const ContainerCash = styled.div`
    width: 100%;
    height: 20px;

    display:flex;
    justify-content:center;
    align-items:center;
    gap: 5px;
`;

const Div= styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    gap: 5px;
`;

const Date = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align:left;
    color: #333333;
`;

const Description = styled.div`
    width: 70%;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align:left;
    color: #333333;
`;

const Valor = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: ${props => props.type === "entrada" ? "#03AC00": "#C70000"};
`;

const Total = styled.div`
    width: 100%;
    height: 20px;

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 16px;
`;

const Text = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #333333;
`;

const Result = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: right;
    color: ${props => props.type==="prejuízo" ? "#C70000" : (props.type === "lucro") ? "#03AC00" : "#333333"};
`;