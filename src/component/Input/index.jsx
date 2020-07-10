import React, { Component } from 'react';
import { StyledInput } from './styled';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    onChange = ({ target: { value } }) => {
        this.setState(() => {
            return (
                { inputValue: value }
            )
        })
    }

    render() {
        return (
            <StyledInput onChange={this.onChange} />
        );
    }
}

export default Input;