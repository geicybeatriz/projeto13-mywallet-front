import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ContainerSign, Logo, Form, Input, Button, Anchor } from "./style.jsx";

export default function SignIn(){
    const [user, setUser] = useState({email: '', password: ''});
    const [disabled, setDisabled] = useState(false);

    function login (e){
        e.preventDefault();
        setDisabled(true);
        console.log("user", user);
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