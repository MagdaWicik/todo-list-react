import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const List = styled.ul`
    background-color: teal;
    list-style-type: none;
    font-size: 15px;
    padding: 20px;
    margin-top: 0px;
    display: grid;
    justify-content: center;
    grid-template-columns: 100px 100px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: activeClassName,
}))`
    &.${activeClassName} {
        color: white;
        font-weight: 700;
    }
    text-decoration: none;
    color: white;
`;