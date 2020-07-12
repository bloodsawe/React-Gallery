import React, { Fragment } from 'react';
import { StyledWrapImg, StyledImg } from './styled';
import { StyledModalButton } from '../../styled';

export const Img = ({ largeImageURL, index }) => {
    return (
        <Fragment>
            <StyledWrapImg  >
                <StyledModalButton data-modal-index={index} >&times;</StyledModalButton>
                <StyledImg data-index={index} data-img src={largeImageURL} />
            </StyledWrapImg>
        </Fragment>
    )
}