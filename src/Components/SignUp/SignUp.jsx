import { useState } from "react";
import { ContainerSign, Logo, Form, Input, Button, Anchor } from "../SignIn/style";
import {ThreeDots} from "react-loader-spinner";

export default function SignUp(){
    const [newUser, setNewUser] = useState({name: '', email:'', password:'', conf_password: ''});
    const [disabled, setDisabled] = useState(false);

    function submitNewUser(e){
        e.preventDefault();
        setDisabled(true);
        console.log("new user", newUser);
    }
    
    return (
        <ContainerSign>
            <Logo>MyWallet</Logo>
            <Form onSubmit={submitNewUser}>
                <Input type="text" 
                        placeholder="Nome" 
                        value= {newUser.name} 
                        onChange={(e) => setNewUser({...newUser, name: e.target.value})} 
                        disabled={disabled} 
                />

                <Input type="email" 
                        placeholder="E-mail"
                        value= {newUser.email} 
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
                        disabled={disabled}
                />

                <Input  type="password"
                        placeholder="Senha" 
                        value= {newUser.password} 
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})} 
                        disabled={disabled}
                />

                <Input  type="password"
                        placeholder="Confirme a senha" 
                        value= {newUser.conf_password} 
                        onChange={(e) => setNewUser({...newUser, conf_password: e.target.value})} 
                        disabled={disabled}
                />

                <Button type="submit" disabled={disabled}>{!disabled ? "Cadastrar" 
                    : <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/>}</Button>
            </Form>
            <Anchor to="/">Já tem uma conta? Entre agora!</Anchor>
        </ContainerSign>
        );
    }