import styled from "styled-components";

const Wrapper = styled.div`
	border: 1px solid;
	border-radius: 5px;
	user-select: none;
	box-sizing: border-box;
`;

export const SelectWrapper = styled(Wrapper)`
	width: fit-content;
	display: inline-block;
	position: relative;
	padding-right: 20px;
	&::after {
		content: "";
		position: absolute;
		right: 4px;
		top: 50%;
		border: 5px solid transparent;
		border-top: 5px solid black;
	}
`;

export const OptionList = styled(Wrapper)`
	width: 100%;
	min-height: 20px;
	position: absolute;
	top: 25px;
	left: 0;
	background: white;
`;

export const Option = styled.div`
	&:hover {
		background: blue;
	}
`;
