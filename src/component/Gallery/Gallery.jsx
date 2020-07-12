import React, { Fragment, useState, useEffect } from "react";
import { Modal } from "./Modal/Modal";
import {
    StyledButton,
    StyledWrap,
    StyledTitle,
} from "./styled";
import { ReactComponent as DualBall } from '../../assets/DualBall.svg';
import { Img } from "./Img/Img";
import { InputForm } from "./InputForm/InputForm";

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
    const [modalIndex, setModalIndex] = useState(0);
    const [storage, setStorage] = useState([] || JSON.parse(localStorage.favorite));

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
        if (target.getAttribute("data-resize")) {
            setModalSize(!modalSize)
        }
        if (target.getAttribute("data-modal-index")) {
            let i = target.getAttribute("data-modal-index");
            setStorage([...storage, img[i]]);

            localStorage.favorite = JSON.stringify(storage);
        }
        if (target.getAttribute("data-img") && target.getAttribute("data-index")) {
            let indexImg = target.getAttribute("data-index");
            setModalSrc(img[indexImg].largeImageURL)
            setModalIndex(indexImg)
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
                <Img key={i} index={i} largeImageURL={largeImageURL} />
            ))
        }
    }

    return (
        <Fragment>
            <StyledWrap onClick={toggleModal} >
                <InputForm onChangeHandler={onChangeHandler} value={value} onSubmitHandler={onSubmitHandler} img={img} />

                {isLoading ? <DualBall /> : renderGallery()}

                {isOpen ? <Modal modalIndex={modalIndex} modalSize={modalSize} modalSrc={modalSrc} /> : null}
            </StyledWrap>
            {img.length === 0 ? null : (
                <StyledButton onClick={loadingImg}>search</StyledButton>
            )}
        </Fragment>
    );
};

// TODO  сделать под модалкой аватарку автора img, при нажатии на аватарку переходить на страничку автора.
