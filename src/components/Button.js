import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    background: #222;
    color: #eee;
    width: 250px;
`;

export default function Button(props) {
    return <PrimaryButton> {props.name} </PrimaryButton>
}
