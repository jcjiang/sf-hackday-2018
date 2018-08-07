import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryButton = styled.button`
    background: #56CCF2;
    color: #fff;
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 5px;
    border: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
`;

const SecondaryButton = styled.button`
    background: #FFF;
    color: #56CCF2;
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    border: 2px solid #56CCF2;
    border-radius: 5px;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
`;

export default function Button(props) {
    if( props.type === 'Primary' ){
        return <Link to={props.link}>
        <PrimaryButton> {props.name} </PrimaryButton>
        </Link>
    } else if ( props.type === 'Secondary' ) {
        return <Link to={props.link}>
        <SecondaryButton> {props.name} </SecondaryButton>
        </Link>
    }
}