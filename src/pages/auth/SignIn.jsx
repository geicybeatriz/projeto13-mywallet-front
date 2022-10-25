import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ContainerSign,ImgLogo, Div, Logo, Form, Input, Button, Anchor } from "./style.jsx";
import authServices from "../../services/authService.js";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/userContext.js";
import logoImg from "./../../assets/images/wallet.png";

export default function SignIn(){
    const {setToken} = useContext(UserContext); 
    const [user, setUser] = useState({email: '', password: ''});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login (e){
        e.preventDefault();
        setDisabled(true);
        
        const promise = authServices.signIn(user);
        promise.then(response => {
            localStorage.setItem("token", response.data);
            setToken(response.data);
            navigate("/home");
        })
        promise.catch((erro) => {
            console.log( "erro" , erro);
            Swal.fire('Erro', erro.data, 'error');
            setDisabled(false);
        })
    }

    return (
    <ContainerSign>
        <Div>
            <ImgLogo src={logoImg} alt="logo da carteira virtual"/>
            <Logo>My Wallet</Logo>
        </Div>
        <Form onSubmit={login}>
            <Input  type="email"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    disabled={disabled}
                    pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                    title="Digite um email válido!"
                    required
            />

            <Input  type="password"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" 
                    disabled={disabled}
                    title="Mínimo de 8 caracteres e pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número"
                    required
            />

            <Button type="submit" disabled={disabled}>
                {!disabled ? "Entrar" 
                :
                <ThreeDots width="60" height="60" color="white" ariaLabel="loading" />}
            </Button>
        </Form>
        <Anchor to="/sign-up">Primeira vez? Cadastre-se!</Anchor>
    </ContainerSign>
    );
}