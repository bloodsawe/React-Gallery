import React, { Component } from 'react';
import { SelectWrapper, OptionList, Option } from './styled';

class CustomSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectText: (this.props.options[0])
        }
    }
    componentDidMount() {
        window.addEventListener('click', this.onWindow)
    }

    onWindow = () => {
        this.setState({ isOpen: false })
    }

    onOpen = (isOpen) => () => this.setState({ isOpen });

    onOption = (e) => () => this.setState({ selectText: e }, this.props.onSelect);



    render() {
        const { isOpen, selectText } = this.state;
        let { options = [] } = this.props;

        return (
            <SelectWrapper onClick={this.onOpen(!isOpen)}>
                {selectText}
                {isOpen ? <OptionList >{options.map((e) => (<Option onClick={this.onOption(e)}>{(e && e.label) || `${e}`}</Option>))}</OptionList> : null}
            </SelectWrapper>
        );
    }
}

export default CustomSelect;