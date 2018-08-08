import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderIcon = styled.div`
    margin: 0 auto;
    background: #56CCF2;
    color: #FFF;
    width: 250px;
    padding: 20px;
    padding-top: 45px;
    border-radius: 0px 0px 5px 5px;
    border: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
    text-align: center;
    overflow: hidden;
`;

export default function Header(props) {
    return (
    	<HeaderIcon> {props.name} </HeaderIcon>
    );
}
