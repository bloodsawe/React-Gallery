import React, { Component } from 'react';
import { StyledSwitch, StyledSwitchButton } from './styled';

class SwitchButton extends Component {
    state = { switchOn: false }

    onSwitch = () => this.setState(({ switchOn }) => ({ switchOn: !switchOn }));

    render() {
        const { switchOn } = this.state;
        return (
            <StyledSwitch switch={switchOn} onClick={this.onSwitch}>
                <StyledSwitchButton switch={switchOn} />
            </StyledSwitch>
        );
    }
}

export default SwitchButton;