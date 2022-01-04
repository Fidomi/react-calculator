import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
    width: 100vw;
    height: 50px;
    background-color: black;
`;

const Nav = styled.nav`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    align-items: center;
    color: white;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: palevioletred;
    font-weight: bold;
`;

const Header = () => {
    return (
        <Container>
            <Nav>
                <StyledLink to={`/`}>Home</StyledLink>
                <StyledLink to={`/calculator`}>Calculator</StyledLink>
                <StyledLink to={`/todolist`}>Todo List</StyledLink>
            </Nav>
        </Container>
    );
};

export default Header;
