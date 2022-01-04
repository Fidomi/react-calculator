import React from "react";
import styled from "styled-components";

const Value = styled.div`
    box-sizing: border-box;
    width: ${(props) => (props.isCancel ? "66%" : "33%")};
    height: 25%;
    text-align: ${(props) => (props.isCancel ? "left" : "center")};
    padding-left: ${(props) => (props.isCancel ? "16px" : "0")};
    background-color: ${(props) => (props.isCancel ? "yellow" : "white")};
    padding-top: 6px;
    color: black;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    line-height: 30px;
`;

const Number = ({ number }) => {
    const isCancel = number === "C";
    return <Value isCancel={isCancel}>{number}</Value>;
};

export default Number;
