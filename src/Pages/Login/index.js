import { useEffect, useState } from "react";
import ButtonOnclick from "../../components/ButtonOnclick";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import Label from "../../components/Label";
import Msg from "../../components/Msg";
import TitleH1 from "../../components/TitleH1";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import mapDispatchToProps from "../../components/mapDispatchToProps";
import mapStateToProps from "../../components/mapStateToProps";
import styled from "styled-components";
import ButtonLinkTo from "../../components/ButtonLinkTo";

const LoginPage = ({ state, setState, location }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const HandleLogin = () => {
        if (username.length === 0 || password.length === 0) return setState('notEmpty')
        fetch('http://localhost:3001/login', {
            method: 'post',
            body: JSON.stringify({
                "username": username,
                "password": password,
            }),
            headers: { 'Content-type': 'application/json' }
        }).then(res => res.json()).then(({ status }) => setState(status))
    }
    useEffect(() => {
        if (location?.state?.state === 'isNotLoged') {
            setState('isNotLoged')
        }
    }, [])

    useEffect(() => {
        if (state === 'sucess') {
            setTimeout(() => history.push("/main"), 2000)
        }
    }, [state])

    return (
        <Container>
            <TitleH1>Login</TitleH1>
            <Label>
                Usuário
                <InputText onChange={({ target }) => setUsername(target.value)} />
            </Label>
            <Label>
                Senha
                <InputPassword onChange={({ target }) => setPassword(target.value)} />
            </Label>
            <ButtonLinkTo to='/cadastro'>Cadastrar</ButtonLinkTo>
            <ButtonOnclick onClick={() => HandleLogin()}>Entrar</ButtonOnclick>
            {state === 'sucess' && <Msg>Login efetuado com sucesso!</Msg>}
            {state === 'error' && <Msg status='error'>O login ou a senha estão incorretos!</Msg>}
            {state === 'notEmpty' && <Msg status='error'>Os campos não podem estar vazios!</Msg>}
            {state === 'isNotLoged' && <Msg status='error'>Você não está logado!</Msg>}
        </Container>
    )
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)