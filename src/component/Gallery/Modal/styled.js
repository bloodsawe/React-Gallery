import styled from "styled-components";

export const StyledModal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.2);
`;

export const StyledModalBlockImg = styled.div`
	position: relative;
	background: white;
	max-width: ${({ modalSize }) => (modalSize ? "100%" : "1200px")};
	max-height: ${({ modalSize }) => (modalSize ? "100%" : "1200px")};
	width: ${({ modalSize }) => (modalSize ? "100%" : "80%")};
	height: ${({ modalSize }) => (modalSize ? "100%" : "80%")};
	transition: all 1s;
`;
export const StyledModalImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const StyledModalResize = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 6px;
	left: 6px;
	width: 30px;
	height: 30px;
	background: red;
`;
