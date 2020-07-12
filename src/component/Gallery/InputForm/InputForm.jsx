import React, { useEffect, useRef } from 'react';
import { StyledInputWrap, StyledInputForm, StyledInput, StyledCounter } from "./styled";


export const InputForm = ({ value, onChangeHandler, onSubmitHandler, img }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <StyledInputWrap >
            <StyledInputForm onSubmit={onSubmitHandler}>
                <StyledInput ref={inputRef} onChange={onChangeHandler} value={value} />
            </StyledInputForm>

            <StyledCounter>{img.length}</StyledCounter>
        </StyledInputWrap>
    )
}

