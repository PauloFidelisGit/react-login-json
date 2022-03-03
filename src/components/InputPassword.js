import styled from "styled-components";

const InputPassword = ({ onChange }) => {
    return (
        <Container>
            <Input type='password' onChange={onChange} />
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align ? props.align : 'center'};
`;
const Input = styled.input`
    font-size: 1rem;
`;
export default InputPassword;