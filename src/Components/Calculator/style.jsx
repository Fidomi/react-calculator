import styled from "styled-components";

export const Container = styled.div`
    margin: 100px auto;
    width: 200px;
    height: 250px;
    display: flex;
    flex-flow: row wrap;
    border: black solid 1px;
`;

export const TotalContainer = styled.div`
    flex: 1 0 100%;
    height: 20%;
    display: flex;
    flex-flow: column no-wrap;
`;

export const NumbersContainer = styled.div`
    flex: 1 1 75%;
    height: 80%;
    display: flex;
    flex-flow: row wrap;
`;

export const SignsContainer = styled.div`
    flex: 1 1 25%;
    height: 80%;
`;
