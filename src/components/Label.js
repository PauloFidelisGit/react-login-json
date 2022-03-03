import styled from "styled-components";

const Label = ({ children }) => {
    return <Container><LabelText><span>{children}</span></LabelText></Container>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align ? props.align : 'center'};
    margin: 10px;
`;
const LabelText = styled.label`
    display: flex;
    flex-direction: column;    
    &>span{
        font-weight: bold;
        font-size: 1rem;
    }
`;
export default Label;