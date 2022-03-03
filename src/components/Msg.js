import styled from "styled-components";

const Msg = ({ children, align, status }) => {
    return <Container align={align}><Div status={status}>{children}</Div></Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align ? props.align : 'center'};
    margin: 10px;
`;
const Div = styled.div`
    background-color: ${props => props.status === 'error' ? 'red' : 'green'};
    padding: 10px;
    color: #fff;
`;

export default Msg;