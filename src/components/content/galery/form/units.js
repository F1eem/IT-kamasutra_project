import styled from "@emotion/styled";

const WrapperForm = styled.div`
    margin: 5px;
    border-radius: 10px;
    border: 2px solid grey;
    height:150px;
    width:250px;
    background-color: ${({bgColor}) => (bgColor === undefined ? 'gold' : bgColor)}
`

export {WrapperForm}