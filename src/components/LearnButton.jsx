import React, { Fragment, useState } from "react";
import styled from "styled-components";

const StyledLearnButton = styled.a`
	border-radius: 46px;
	padding: 10px 25px;
	font-size: 0.86rem;
	color: ${props => props.color};
	display: block;
	margin-right: auto;
	width: fit-content;
	background-color: white;
	border: 2px solid white;
	transition: ease-in-out 0.3s;
	margin-top: auto;

	&:hover {
		background-color: transparent;
		color: white;
	}
`;

function LearnButton(props) {
	return(
		<StyledLearnButton href="/" color={props.color}>Learn More</StyledLearnButton>
	);
}

export default LearnButton;