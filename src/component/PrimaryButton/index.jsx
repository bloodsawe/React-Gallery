import React from 'react';
import { StyledButton } from './styled';

const Button = ({ primary, type }) => {
    return (
        <StyledButton primary={primary} type={type}>text button</StyledButton>
    )
}

export default Button;