import { Container, ContainerCash, List, Total, Date, Description, Valor, Text, Result, Delete } from "./style";
import UserContext from "../Context/context";
import { useContext } from "react";
import axios from "axios";

export default function Register(props){
    const {registerList,setRegisterList} = props;
    const {apiData} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${apiData.token}`}};
    
    let total = 0;
    for(let i = 0; i < registerList.length; i++){
        if(registerList[i].type === "entrada"){
            total += registerList[i].amount;
        } else{
            total -= registerList[i].amount;
        }
    }

    function deleteItem(id){
        console.log(id);
        const URL_delete = `https://back-projeto13-mywallet.herokuapp.com/home/${id}`;
        const promise = axios.delete(URL_delete, config);
        promise.then(() => {
            window.confirm("Realmente deseja deletar esse item?") === true && updateList()
        });
        promise.catch(erro => console.log(erro));
    }

    function updateList(){
        const URL_RegisterList = "https://back-projeto13-mywallet.herokuapp.com/home";
        const request = axios.get(URL_RegisterList, config);
        request.then((response) => {
            setRegisterList(response.data[0]);
        });
        request.catch((e) => console.log(e));
    }
    
    return(
        <Container>
            <List>
                {registerList.map((obj, id) => 
                    <ContainerCash id={obj._id} key={id}>
                        <Date>{obj.date}</Date>
                        <Description>{obj.description}</Description>
                        <Valor type={obj.type}>{obj.amount}</Valor>
                        <Delete onClick={() => deleteItem(obj._id)}>x</Delete>
                    </ContainerCash>
                )}
            </List>
            <Total>
                <Text>Saldo</Text>
                <Result >{Math.round(total).toFixed(2)}</Result>
            </Total>
        </Container>
    );
}