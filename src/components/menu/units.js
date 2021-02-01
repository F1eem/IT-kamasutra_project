import styled from "@emotion/styled";

const WrapperMenu = styled.div`
    background-color: green;
    font-size: 22px;
    padding: 5px;
    border-radius:10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    min-width: 150px;
    max-width: 150px;
`
const WrapperMenuButton = styled.div `
    text-decoration: none;
    & > a {
        text-decoration: none;
        color: ${({color}) => (color === undefined ? 'black' : color )}
    }
    & .active {
            color: gold;
        }
`
export {WrapperMenu, WrapperMenuButton};