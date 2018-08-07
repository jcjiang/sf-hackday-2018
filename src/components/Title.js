import React from 'react';
import styled from 'styled-components';

const TitleDesc = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
	margin: 30px auto;
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