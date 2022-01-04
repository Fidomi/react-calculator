import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
    width: 80vw;
    height: 50vh;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <StyledTitle>
            <h1>Little React projects for Training</h1>
        </StyledTitle>
    );
};

export default Home;
