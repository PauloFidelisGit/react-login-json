import { useEffect, useState } from "react";
import ButtonOnclick from "../../components/ButtonOnclick";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import Label from "../../components/Label";
import Msg from "../../components/Msg";
import TitleH1 from "../../components/TitleH1";
import { useHistory } from "react-router-dom";
import mapDispatchToProps from "../../components/mapDispatchToProps";
import mapStateToProps from "../../components/mapStateToProps";
import { connect } from "react-redux";

const Cadastro = ({ state, setState}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const history = useHistory();

    const HandleCadastro = () => {
        if (password !== passwordRepeat) return setState('diffPassword')
        if (email.length === 0 || password.length === 0 || passwordRepeat.length === 0) return setState('notEmpty')
        fetch('http://localhost:3001/cadastro', {
            method: 'post',
            body: JSON.stringify({
                "username": email,
                "password": password,
            }),
            headers: { 'Content-type': 'application/json' }
        }).then(res => res.json()).then(({ status }) => setState(status))
    }

    useEffect(() => {
        if (state === 'sucess') {
            setTimeout(() => history.push("/main"), 2000)
        }
    }, [state])

    return (
        <>
            <TitleH1>Cadastro</TitleH1>
            <Label>
                Email
                <InputText onChange={({ target }) => setEmail(target.value)} />
            </Label>
            <Label>
                Senha
                <InputPassword onChange={({ target }) => setPassword(target.value)} />
            </Label>
            <Label>
                Repetir senha
                <InputPassword onChange={({ target }) => setPasswordRepeat(target.value)} />
            </Label>
            <ButtonOnclick onClick={() => HandleCadastro()}>Cadastrar</ButtonOnclick>
            {state === 'sucess' && <Msg>Cadastro efetuado com sucesso!</Msg>}
            {state === 'error' && <Msg status='error'>Erro. Cadastro não efetuado!</Msg>}
            {state === 'notEmpty' && <Msg status='error'>Os campos não podem estar vazios!</Msg>}
            {state === 'diffPassword' && <Msg status='error'>As senhas não conferem!</Msg>}
        </>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)