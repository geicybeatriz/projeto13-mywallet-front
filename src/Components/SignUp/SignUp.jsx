import { ContainerSign, Logo, Form, Input, Button, Anchor } from "../SignIn/style";

export default function SignUp(){
    return (
        <ContainerSign>
            <Logo>MyWallet</Logo>
            <Form>
                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="E-mail"/>
                <Input  placeholder="Senha" type="password"/>
                <Input  placeholder="Confirme a senha" type="password"/>
                <Button type="submit">Cadastrar</Button>
            </Form>
            <Anchor to="/">Já tem uma conta? Entre agora!</Anchor>
        </ContainerSign>
        );
    }