import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const WrapperMenu = styled.div`
  background-color: green;
  font-size: 22px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  min-width: 150px;
  max-width: 150px;
`;
const WrapperElemMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavLinkButton = styled(NavLink)`
  text-decoration: none;
  color: ${({ color }) => (color === undefined ? "black" : color)};
  &.active {
    color: gold;
  }
`;
export { WrapperMenu, NavLinkButton, WrapperElemMenu };
