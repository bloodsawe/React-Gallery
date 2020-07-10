import styled from "styled-components";

const Wrapper = styled.div`
	border: 1px solid #787878;
	border-radius: 7px;
	user-select: none;
	box-sizing: border-box;
	color: rgba(120, 120, 120, 0.5);
	text-transform: capitalize;
`;

export const DropdownWrapper = styled(Wrapper)`
	width: fit-content;
	display: inline-block;
	position: relative;
	padding: 17px 194px 17px 20px;
	&:hover {
		color: black;
	}
	&::after {
		content: "";
		position: absolute;
		right: 4px;
		top: 63%;
		transform: translate(-50%, -50%);
		border: 11px solid transparent;
		border-top: 13px solid rgba(120, 120, 120, 0.5);
	}
	&:hover::after {
		border-top: 13px solid #900020;
	}
`;

export const DropdownList = styled(Wrapper)`
	width: 100%;
	min-height: 20px;
	position: absolute;
	top: 63px;
	left: 0;
	background: white;
`;

export const Option = styled.div`
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	text-transform: capitalize;
	padding: 19px 0 19px 20px;
	&:hover {
		border-left: 4px solid #900020;
		background: linear-gradient(
			90deg,
			#f9f8f8 1.77%,
			rgba(244, 244, 244, 0) 100%
		);
	}
`;
