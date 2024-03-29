import { useState } from "react";
import { ContainerSign, ImgLogo, Div, Logo, Form, Input, Button, Anchor } from "./style.jsx";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/authService";
import { ThreeDots } from "react-loader-spinner";
import logoImg from "./../../assets/images/wallet.png";

export default function SignUp(){
    const [newUser, setNewUser] = useState({name:'', email:'', password:'', repeat_password: ''});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function submitNewUser(e){
        e.preventDefault();
        setDisabled(true);

        const promise = authServices.signUp(newUser);
        promise.then(() => navigate("/"));
        promise.catch((error) => {
            console.log("error", error);
            setDisabled(false);
        })
    }
    
    return (
        <ContainerSign>
            <Div>
                <ImgLogo src={logoImg} alt="logo da carteira virtual"/>
                <Logo>My Wallet</Logo>
            </Div>
            <Form onSubmit={submitNewUser}>
                <Input type="text" 
                        placeholder="Nome" 
                        value= {newUser.name} 
                        onChange={(e) => setNewUser({...newUser, name: e.target.value})} 
                        disabled={disabled} 
                        required
                />

                <Input type="email" 
                        placeholder="E-mail"
                        value= {newUser.email} 
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
                        disabled={disabled}
                        pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                        title="Digite um email válido!"
                        required
                />

                <Input  type="password"
                        placeholder="Senha" 
                        value= {newUser.password} 
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})} 
                        disabled={disabled}
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" 
                        title="Mínimo de 8 caracteres e pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número"
                        required
                />

                <Input  type="password"
                        placeholder="Confirme a senha" 
                        value= {newUser.repeat_password} 
                        onChange={(e) => setNewUser({...newUser, repeat_password: e.target.value})} 
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" 
                        disabled={disabled}
                        title="Deve ser igual à senha digitada no campo acima!"
                        required
                />

                <Button type="submit" disabled={disabled}>{!disabled ? "Cadastrar" 
                    : <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/>}</Button>
            </Form>
            <Anchor to="/">Já tem uma conta? Entre agora!</Anchor>
        </ContainerSign>
    );
}