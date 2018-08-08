import React from 'react';
import styled from 'styled-components';

const PTitle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	margin: 30px auto;
	font-family: 'Roboto', sans-serif;
	font-size: 2.5rem;
	text-align: center;
`;

export default function PresenterTitle(props){
	return <PTitle>
		{props.description}
		{props.children}
	</PTitle>
}
