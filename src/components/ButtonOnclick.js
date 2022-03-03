import styled from "styled-components";

const ButtonOnclick = ({ children, onClick }) => {
    return <Container><Btn onClick={onClick}>{children}</Btn></Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align ? props.align : 'center'};
`;
const Btn = styled.button`
    border: none;
    padding: 10px;
    margin: 10px;
    font-size: 1rem;
`;
export default ButtonOnclick;