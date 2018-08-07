import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryButton = styled.button`
    background: #56CCF2;
    color: #eee;
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 5px;
    border: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
`;

export default function Button(props) {
    return <Link to={props.link}>
    	<PrimaryButton> {props.name} </PrimaryButton>
    </Link>
}
