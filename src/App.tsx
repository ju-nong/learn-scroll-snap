import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TitleStyled = styled.h1`
    text-align: center;
`;

const ScrollStyled = styled.div`
    width: 100%;
    height: 100vmin;
    max-height: 70vh;
    margin: 40px 0px;

    display: flex;
    align-items: center;

    &.row {
        column-gap: 20px;

        overflow-x: auto;
        overflow-y: hidden;

        scroll-snap-type: x mandatory;
    }

    &.column {
        flex-direction: column;
        row-gap: 20px;

        overflow-y: auto;
        overflow-x: hidden;

        scroll-snap-type: y mandatory;
    }
`;

const ContentStyled = styled.div`
    flex: 0 0 auto;
    scroll-snap-align: start;

    &.row {
        width: 80%;
        height: 100%;
        padding-left: 20px;
    }

    &.column {
        width: 100%;
        height: 80%;
        padding-top: 20px;
    }
`;

const ImgStyled = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

function App() {
    const types = ["row", "column"];
    const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    return (
        <div>
            <TitleStyled>Scroll Snap API</TitleStyled>
            {types.map((type) => (
                <ScrollStyled className={type}>
                    {imgs.map((img) => (
                        <ContentStyled className={type}>
                            <ImgStyled src={`images/${img}`} alt={img} />
                        </ContentStyled>
                    ))}
                </ScrollStyled>
            ))}
        </div>
    );
}

export default App;
