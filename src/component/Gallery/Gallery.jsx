import React, { Fragment, useState, useEffect, useRef } from "react";
import { Modal } from "./Modal/Modal";
import {
    StyledWrapImg,
    StyledImg,
    StyledButton,
    StyledModalButton,
    StyledInput,
    StyledInputWrap,
    StyledInputForm,
    StyledCounter,
    StyledWrap,
    StyledTitle,
} from "./styled";
import { ReactComponent as DualBall } from '../../assets/DualBall.svg';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "17361730-7007e1a4444906fa7c4133184";

export const Gallery = (props) => {
    const [value, setValue] = useState("dog");
    const [img, setImg] = useState([]);
    const [counterPage, setCounterPage] = useState(2);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [counterFind, setCounterFind] = useState(0);
    const [modalSrc, setModalSrc] = useState("");
    const [modalSize, setModalSize] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    let onChangeHandler = ({ target: { value } }) => {
        setValue(value);
    };

    let onSubmitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        fetch(
            `${BASE_URL}?key=${API_KEY}&q=${value}`
        )
            .then((res) => res.json())
            .then((img) => {
                setImg(img.hits);
                setCounterFind(counterFind + 1);
            })
            .then(() => setIsLoading(false))
    };


    let loadingImg = () => {
        fetch(
            `${BASE_URL}?key=${API_KEY}&q=${value}&page=${counterPage}`
        )
            .then((res) => res.json())
            .then((data) => {
                setImg([...img, ...data.hits]);
                setCounterPage(counterPage + 1);
            });
    };

    let toggleModal = ({ target }) => {
        console.log(target);

        if (target.getAttribute("data-resize")) {
            setModalSize(!modalSize)
        }
        if (target.getAttribute("data-img") && target.getAttribute("data-index")) {
            let indexImg = target.getAttribute("data-index");
            setModalSrc(img[indexImg].largeImageURL)
            setIsOpen(!isOpen);
        } else if (target.getAttribute("data-img")) {
            setIsOpen(!isOpen);
        } else if (target.getAttribute("data-close")) {
            setIsOpen(false);
            setModalSize(false);
        }
    };

    let renderGallery = () => {
        if (img.length === 0 && counterFind === 0) {
            return <StyledTitle>Press Enter for Search Img</StyledTitle>
        } else if (img.length === 0) {
            return <StyledTitle>Sorry, nothing was found for your request.</StyledTitle>
        } else {
            return img.map(({ largeImageURL }, i) => (
                <StyledWrapImg key={i} >
                    <StyledModalButton >&times;</StyledModalButton>
                    <StyledImg data-index={i} data-img src={largeImageURL} />
                </StyledWrapImg>
            ))
        }
    }

    return (
        <Fragment>
            <StyledWrap onClick={toggleModal}>
                <StyledInputWrap >
                    <StyledInputForm onSubmit={onSubmitHandler}>
                        <StyledInput ref={inputRef} onChange={onChangeHandler} value={value} />
                    </StyledInputForm>

                    <StyledCounter>{img.length}</StyledCounter>
                </StyledInputWrap>

                {isLoading ? <DualBall /> : renderGallery()}

                {isOpen ? <Modal modalSize={modalSize} modalSrc={modalSrc} /> : null}
            </StyledWrap>
            {img.length === 0 ? null : (
                <StyledButton onClick={loadingImg}>search</StyledButton>
            )}
        </Fragment>
    );
};

// TODO  сделать под модалкой аватарку автора img, при нажатии на аватарку переходить на страничку автора.
