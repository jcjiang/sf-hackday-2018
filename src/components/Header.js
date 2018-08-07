import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderIcon = styled.div`
    position: fixed;
    top: 50%;
    background: #56CCF2;
    color: #FFF;
    width: 150px;
    padding: 20px;
    border-radius: 0px 0px 5px 5px;
    border: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
`;

export default function HeaderIcon(props) {
    return (
        <Link to={props.link}>
    	    <HeaderIcon> {props.name} </HeaderIcon>
        </Link>
    );
}
