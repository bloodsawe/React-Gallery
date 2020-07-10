import React, { useState, useEffect, useRef } from "react";
import {
	StyledButton,
	StyledWrapper,
	StyledClock,
	StyledWindow,
	StyledArrow,
} from "./styled";

const Timer = () => {
	const [counter, setCounter] = useState(0);
	const timerIdCounterRef = useRef(null);
	const timerIdClickRef = useRef(null);

	useEffect(() => {
		// did Mount
		return () => {
			// will unMount
			clearInterval(timerIdCounterRef.current);
		};
	}, []);

	const onReset = () => {
		clearTimeout(timerIdClickRef.current);
		timerIdClickRef.current = setTimeout(() => {
			setCounter(0);
			clearInterval(timerIdCounterRef.current);
			timerIdCounterRef.current = 1;
		}, 2000);
	};

	const onStart = () => {
		clearTimeout(timerIdClickRef.current);

		if (timerIdCounterRef.current) {
			clearInterval(timerIdCounterRef.current);
			timerIdCounterRef.current = null;
		} else {
			let c = counter;
			timerIdCounterRef.current = setInterval(() => {
				console.log("interval");

				setCounter(++c);
			}, 10);
		}
	};

	return (
		<section>
			<StyledWrapper>
				<StyledButton onMouseDown={onReset} onMouseUp={onStart} />
				<StyledClock>
					<StyledArrow counter={counter} />
					<StyledWindow>{counter}</StyledWindow>
				</StyledClock>
			</StyledWrapper>
		</section>
	);
};

export default Timer;
