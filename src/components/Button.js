import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    background: #56CCF2;
    color: #eee;
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 5px;
    border: 0;
`;

export default function Button(props) {
    return <PrimaryButton> {props.name} </PrimaryButton>
}
