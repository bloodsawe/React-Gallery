import React, { Component } from 'react';
import { DropdownWrapper, DropdownList, Option } from './styled';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectText: this.props.options[0]
        }
    }

    onOpen = (isOpen) => () => this.setState({ isOpen });

    onOption = (e) => () => this.setState({ selectText: e })
    render() {
        const { isOpen, selectText } = this.state;
        let { options } = this.props;
        return (
            <DropdownWrapper onClick={this.onOpen(!isOpen)}>
                {selectText}
                {isOpen ? <DropdownList >{options.map((e) => (<Option onClick={this.onOption(e)}>{e}</Option>))}</DropdownList> : null}
            </DropdownWrapper>
        );
    }
}

export default Dropdown;