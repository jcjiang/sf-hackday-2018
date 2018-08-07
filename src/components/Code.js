import React from 'react';
import styled from 'styled-components';

const KeyCode = styled.div`
	border: solid 2px #56CCF2;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 30px;
	color: #56CCF2;
	font-family: 'Roboto-Mono', monospace;
	font-size: 1.5rem;
`;

export default function Code(props){
	return <KeyCode>{props.random}</KeyCode>
}