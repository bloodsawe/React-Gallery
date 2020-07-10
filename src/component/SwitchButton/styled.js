import styled from "styled-components";

export let StyledSwitch = styled.div`
	position: relative;
	background: ${(props) =>
		props.switch ? "rgba(144, 0, 32, 0.5)" : "rgba(120, 120, 120, 0.5)"};
	border-radius: 30px;
	width: 68px;
	height: 21px;
`;

export let StyledSwitchButton = styled.div`
	position: absolute;
	top: -4.5px;
	${(props) => (props.switch ? "left: 38px" : "left: 0")};
	background: ${(props) => (props.switch ? "#900020" : "#787878")};
	box-shadow: ${(props) =>
		props.switch
			? "-4px 0px 7px rgba(117, 3, 28, 0.47)"
			: "4px 0px 7px rgba(0, 0, 0, 0.25)"};
	border-radius: 50%;
	width: 30px;
	height: 30px;
	transition: all 0.5s;
`;
