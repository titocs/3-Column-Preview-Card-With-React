import React, { Fragment, useState } from "react";
import LearnButton from "./LearnButton";
import styled from "styled-components";

const StyledCards = styled.div`
	background-color: ${props => props.color};
	padding: 2.5rem;
	height: 400px;
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: 768px) {
		height: 470px;
	}
`;

const ImageCards = styled.img`
	width: 3.5rem;
	margin-bottom: 1.25rem;

	@media only screen and (min-width: 768px) {
		margin-bottom: 2rem;
	}

	@media only screen and (min-width: 1280px) {
		margin-bottom: 2.25rem;
	}
`;

const TitleCards = styled.h1`
	margin-bottom: 1.35rem;
	font-family: Big Shoulders Display;
	color: white;
	font-size: 1.975rem;
	line-height: 2.25rem;
	text-align: left;

	@media only screen and (min-width: 1280px) {
		font-size: 2.25rem;
	}
`;

const CardDescription = styled.p`
	color: hsla(0, 0%, 100%, 0.75);
	font-family: Lexend Deca;
	text-align: left;
	font-size: 14px;
  line-height: 24px;
`;

const CardComponent = (props) => {
	return(
		<StyledCards color={props.color}>
			<div>
				<ImageCards src={props.image} alt="" />
				<TitleCards>{props.title}</TitleCards>
				<CardDescription>{props.description}</CardDescription>
				
			</div>
			<LearnButton color={props.color}></LearnButton>
		</StyledCards>
	);
}

export default CardComponent;