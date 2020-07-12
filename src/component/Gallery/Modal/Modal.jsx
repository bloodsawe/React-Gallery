import React from 'react';
import {
    StyledModal,
    StyledModalBlockImg,
    StyledModalImg,
    StyledModalResize,
    StyledWrapImgAvatar,
    StyledImgAvatar
} from "./styled";
import { StyledModalButton } from '../../styled';
import { Link } from "react-router-dom";




export const Modal = ({ modalSize, modalSrc, modalIndex, userImg, userInfo }) => {
    return (
        <StyledModal data-close>
            <StyledModalBlockImg modalSize={modalSize} >
                <StyledModalButton data-modal-index={modalIndex}>&times;</StyledModalButton>
                <StyledModalResize data-resize >&times;</StyledModalResize>
                <StyledModalImg src={modalSrc}></StyledModalImg>
                <Link to="/user">
                    <StyledWrapImgAvatar data-userinfo >
                        <StyledImgAvatar src={userImg} />
                    </StyledWrapImgAvatar>
                </Link>
            </StyledModalBlockImg>
        </StyledModal>
    )
}