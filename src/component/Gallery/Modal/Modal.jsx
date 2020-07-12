import React from 'react';
import {
    StyledModal,
    StyledModalBlockImg,
    StyledModalImg,
    StyledModalResize
} from "./styled";
import { StyledModalButton } from '../../styled';



export const Modal = ({ modalSize, modalSrc, modalIndex }) => {
    return (
        <StyledModal data-close>
            <StyledModalBlockImg modalSize={modalSize} >
                <StyledModalButton data-modal-index={modalIndex}>&times;</StyledModalButton>
                <StyledModalResize data-resize >&times;</StyledModalResize>
                <StyledModalImg src={modalSrc}></StyledModalImg>
            </StyledModalBlockImg>
        </StyledModal>
    )
}