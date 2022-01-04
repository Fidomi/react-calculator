import React from "react";
import styled from "styled-components";

const Value = styled.div`
    width: 100%;
    height: 20%;
    text-align: center;
    background-color: red;
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: auto auto;
`;

const Operator = ({ sign }) => {
    const getDecodedString = (str) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    };

    return <Value>{getDecodedString(sign)}</Value>;
};

export default Operator;
