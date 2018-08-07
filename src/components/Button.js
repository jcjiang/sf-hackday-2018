import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    background: #222;
    color: #eee;
    width: 25%;
    height: 13%;
    display:inline-block;
    padding:0.3em 1.2em;
    margin:0 3% 3% 0;
    border:0.16em solid rgba(255,255,255,0);
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align:center;
    transition: all 0.2s;
`;

export default function Button(props) {
    return <PrimaryButton> {props.name} </PrimaryButton>
}
