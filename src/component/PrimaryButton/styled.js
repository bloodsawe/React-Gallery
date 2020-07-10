import styled from "styled-components";

export const StyledButton = styled.button`
	background: ${(props) => (props.primary ? "#900020" : "#fff")};
	border-radius: 7px;
	border: 1px solid #900020;
	outline: none;
	font-size: 14px;
	line-height: 17px;
	color: ${(props) => (props.primary ? "#fff" : "#900020")};
	text-transform: capitalize;
	font-weight: normal;
	height: 45px;
	width: 210px;
	&:hover {
		box-shadow: 0px 5px 20px rgba(171, 1, 39, 0.3);
	}
`;
