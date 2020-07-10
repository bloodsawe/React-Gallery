import styled from "styled-components";

export const StyledInput = styled.input`
	position: relative;
	border: 1px solid #787878;
	box-sizing: border-box;
	border-radius: 7px;
	color: rgba(120, 120, 120, 0.5);
	text-transform: capitalize;
	font-size: 18px;
	line-height: 22px;
	padding: 17px 0 17px 20px;
	outline: none;
	&:hover {
		caret-color: #900020;
	}
	&:focus {
		border: 1px solid #900020;
		caret-color: #900020;
	}
`;

// export const StyledInputLabel = styled.div`
// 	display: block;
// 	position: absolute;
// 	color: #dd0000;
// 	text-transform: capitalize;
// 	font-size: 14px;
// 	line-height: 17px;
// `;
