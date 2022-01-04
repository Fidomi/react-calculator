import React from "react";
import styled from "styled-components";

const Value = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    font-size: ${(props) => props.fontSize + "px"};
    font-weight: 600;
    text-align: right;
    padding: 0 10px;
    display: flex;
    justify-content: "center";
    align-items: "center";
`;

const Total = ({ total, fontSize }) => {
    return (
        <Value fontSize={fontSize}>
            <p
                style={{
                    margin: "auto auto",
                    padding: "0",
                    height: "auto",
                }}>
                {total}
            </p>
        </Value>
    );
};

export default Total;
