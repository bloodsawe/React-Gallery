import React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

const Text = styled.div`

`;

const Resize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const onResize = _ => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', onResize)
    }, [])

    return (
        <div >
            {size.width} x {size.height}
        </div>
    )
}

export default Resize;