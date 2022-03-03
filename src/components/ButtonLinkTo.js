import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLinkTo = ({ children, onClick, to }) => {
    return (
        <Container>
            <Link to={to}>
                <Btn onClick={onClick}>
                    {children}
                </Btn>
            </Link>
        </Container>
    )
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
export default ButtonLinkTo;