import React from "react";
import "./style.scss";

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.buttonRef = React.createRef();
	}

	componentWillMount() {
		console.log(this.buttonRef);
	}

	componentDidMount() {
		console.log(this.buttonRef.current.clientHeight);
	}

	render() {
		return (
			<div className="slider-wrapper">
				<button ref={this.buttonRef}>Text</button>
			</div>
		);
	}
}
