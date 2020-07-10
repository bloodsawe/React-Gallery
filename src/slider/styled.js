import styled from "styled-components";

export const StyledSliderWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 455px;
	border: 1px solid #000000;
`;

export const StyledSliderItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const StyledButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	${(props) => (props.next ? "right: 29px" : null)};
	${(props) => (props.prev ? "left: 29px" : null)};
	width: 54px;
	height: 54px;
	border: 1px solid rgba(144, 0, 32, 0.3);
	border-radius: 50%;
	:hover {
		border: 1px solid #900020;
	}
	::after {
		content: "";
		position: absolute;
		right: 50%;
		top: 22px;
		${(props) =>
			props.next
				? "transform: translate(90%, -25%) rotate(-90deg)"
				: null};
		${(props) =>
			props.prev
				? "transform: translate(10%, -25%) rotate(90deg)"
				: null};

		border: 11px solid transparent;
		border-top: 13px solid rgba(144, 0, 32, 0.3);
	}
	:hover::after {
		border-top: 13px solid #900020;
	}
`;

export const StyledDotsWrapper = styled.div`
	position: absolute;
	display: flex;
	bottom: 27px;
	right: 50%;
	transform: translate(50%, 0);
`;

export const StyledDots = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background: rgba(144, 0, 32, 0.3);
	& + & {
		margin-left: 10px;
	}
`;
