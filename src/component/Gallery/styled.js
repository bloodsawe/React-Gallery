import styled from "styled-components";

export const StyledTitle = styled.h2`
	text-align: center;
	color: #b7b5b582;
	letter-spacing: 2px;
`;
export const StyledWrap = styled.div`
	margin-bottom: 25px;
`;

export const StyledCounter = styled.div`
	display: block;
	background: #e8eef1;
	width: 50px;
	text-align: center;
	padding: 6px 0px;
	border-radius: 7px;
`;

export const StyledInputForm = styled.form`
	width: 80%;
`;

export const StyledInputWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 5px 0 5px 10px;
	border: 1px solid #787878;
	border-radius: 7px;
	font-size: 18px;
	line-height: 22px;
	color: rgba(120, 120, 120, 0.5);
	outline: none;
`;

export const StyledWrapImg = styled.div`
	position: relative;
	display: inline-block;
	height: 150px;
	padding: 6px;
	width: 20%;
`;

export const StyledImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const StyledButton = styled.button`
	display: block;
	margin: 0 auto;
	outline: none;
	border: none;
	border-radius: 5px;
	background: #007a807a;
	padding: 5px 15px;
	text-transform: capitalize;
`;

export const StyledModalButton = styled.div`
	display: block;
	position: absolute;
	top: 6px;
	right: 6px;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 15px;
	background: #00d0ff;
	cursor: pointer;
`;
