import styled from "@emotion/styled";

const WrapperDialogs = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-grow:1;
`
const WrapperDialogsItems = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-grow:1;
    background-color: ghostwhite;
`
const WrapperMessageItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    flex-grow: 4;
    background-color: goldenrod;
`
export {WrapperDialogs, WrapperDialogsItems, WrapperMessageItems}