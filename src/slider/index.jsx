import React from 'react';

import { StyledSliderWrapper, StyledSliderItem, StyledButton, StyledDotsWrapper, StyledDots } from './styled';

export const Slider = (props) => {
    return (
        <StyledSliderWrapper>
            <StyledSliderItem>
                <p>Slider 2</p>
            </StyledSliderItem>
            <StyledDotsWrapper>
                <StyledDots />
            </StyledDotsWrapper>
            <StyledButton prev />
            <StyledButton next />
        </StyledSliderWrapper>
    )
}