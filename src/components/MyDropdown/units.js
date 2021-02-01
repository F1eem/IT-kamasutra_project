import styled from "@emotion/styled";

export const WrapperDropdown = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0px 0px 10px gainsboro ;
    margin: 10px;
`
export const WrapperElem = styled.div `
padding: 3px 5px;
cursor: pointer;
&:hover {
background-color: gainsboro;
}
`
export const DropInput = styled.input `
border: 2px solid blue;
border-radius: 3px;
padding: 10px;
outline: none;
`