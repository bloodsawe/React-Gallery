import React from 'react';
import {
    StyledModal,
    StyledModalBlockImg,
    StyledModalImg,
    StyledModalResize
} from "./styled";


export const Modal = ({ modalSize, modalSrc }) => {
    return (
        <StyledModal data-close>
            <StyledModalBlockImg modalSize={modalSize} >
                <StyledModalResize data-resize >&times;</StyledModalResize>
                <StyledModalImg src={modalSrc}></StyledModalImg>
            </StyledModalBlockImg>
        </StyledModal>
    )
}