import React, { Component } from "react";
import "./style.scss";
import email from "./email.svg";


class InputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            value: "",
            errorMessage: this.props.errorMessage || 'bad input',
        };
    }

    _onChange = ({ target: { value } }) => {
        this.setState({
            value,
            error: ""
        })
    };

    _onBlur = () => {
        this.setState(({ value }) => {
            return {
                error: !this.props.validator.test(value),
            }
        })
    }

    render() {
        const { error, value } = this.state;

        return (
            <div className="form-input">
                <div className="input">
                    <input onBlur={this._onBlur} onChange={this._onChange} value={value} placeholder="Username" className={error ? "error" : ""} />
                    {<img src={email} alt="" />}
                    <input className="checkbox" type="checkbox" />
                </div>
                {error ? <p>{this.state.errorMessage}</p> : null}
            </div>
        );
    }
}

export default Input;


