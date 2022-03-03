import styled from "styled-components";

const TitleH1 = ({ children, align }) => {
    return <Container><H1 align={align}>{children}</H1></Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align ? props.align : 'center'};
`;
const H1 = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align ? props.align : 'center'};
    font-size: 2rem;
`;
export default TitleH1;