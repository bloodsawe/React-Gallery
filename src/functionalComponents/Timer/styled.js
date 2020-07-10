import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: relative;
	margin: 0 auto;
	height: 200px;
	width: 200px;
	margin-top: 100px;
`;
export const StyledButton = styled.div`
	position: absolute;
	border: 1px solid red;
	height: 20px;
	width: 20px;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: -10px;
`;
export const StyledClock = styled.div`
	position: relative;
	border-radius: 50%;
	border: 1px solid red;
	height: 200px;
	width: 200px;
	background: red;
`;

export const StyledWindow = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 50%;
	transform: translate(0, -50%);
	bottom: 0;
	border: 1px solid red;
	height: 50px;
	width: 50px;
	background: white;
`;

export const StyledArrow = styled.div`
	position: absolute;
	transform-origin: bottom;
	transform: ${({ counter }) => `rotate(${counter}deg) `};
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 0;
	border: 1px solid red;
	height: 100px;
	width: 4px;
	background: green;
`;
