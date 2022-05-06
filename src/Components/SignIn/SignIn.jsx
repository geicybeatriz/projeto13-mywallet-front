import { ContainerSign, Logo, Form, Input, Button, Anchor } from "./style.jsx";

export default function SignIn(){
    return (
    <ContainerSign>
        <Logo>MyWallet</Logo>
        <Form>
            <Input type="email" placeholder="E-mail"/>
            <Input  placeholder="Senha" type="password"/>
            <Button type="submit">Entrar</Button>
        </Form>
        <Anchor to="/sign-up">Primeira vez? Cadastre-se!</Anchor>
    </ContainerSign>
    );
}