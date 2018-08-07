import React from 'react';
import styled from 'styled-components';

const TitleDesc = styled.div`
	display: flex;
	width: 70vw;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 20vh;
	margin-bottom: 30px;
	margin: 0 auto;
	font-family: 'Roboto', sans-serif;
	font-size: 3rem;
	text-align: center;
`;

export default function Title(props){
	return <TitleDesc>
		{props.description}
		{props.children}
	</TitleDesc>
}