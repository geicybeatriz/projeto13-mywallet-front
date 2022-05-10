import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { ContainerSign, Logo, Form, Input, Button, Anchor } from "./style.jsx";
import UserContext from "./../Context/context.jsx"

export default function SignIn(){
    const {setApiData} = useContext(UserContext);
    const [user, setUser] = useState({email: '', password: ''});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login (e){
        e.preventDefault();
        setDisabled(true);
        
        const URL = "https://back-projeto13-mywallet.herokuapp.com/";
        const promise = axios.post(URL, user);
        promise.then(response => {
            console.log(response.data);
            setApiData({...user, token: response.data, password:""});
            navigate("/home");

        })
        promise.catch( (erro) => {
            console.log( "erro" , erro);
            alert("E-mail ou senha incorretos!");
            setDisabled(false);
        })
    }

    return (
    <ContainerSign>
        <Logo>MyWallet</Logo>
        <Form onSubmit={login}>
            <Input  type="email"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    disabled={disabled}
            />

            <Input  type="password"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    disabled={disabled}
            />

            <Button type="submit" disabled={disabled}>
                {!disabled ? "Entrar" : <ThreeDots width="60" height="60" color="white" ariaLabel="loading" />}
            </Button>
        </Form>
        <Anchor to="/sign-up">Primeira vez? Cadastre-se!</Anchor>
    </ContainerSign>
    );
}