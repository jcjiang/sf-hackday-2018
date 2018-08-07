import React from 'react';
import styled from 'styled-components';

const TitleDesc = styled.div`
	margin-bottom: 30px;
	font-family: 'Roboto', sans-serif;
	font-size: 48px;
`;

export default function Title(props){
	return <TitleDesc>{props.description}</TitleDesc>
}