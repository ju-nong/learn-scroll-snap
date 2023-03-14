import { useState } from "react";
import styled from "@emotion/styled";

const TitleStyled = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`;

const ScrollStyled = styled.div`
    width: 100%;
    height: 100vmin;
    max-height: 70vh;

    display: flex;
    align-items: center;
    column-gap: 20px;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-snap-type: x mandatory;
`;

const ContentStyled = styled.div`
    flex: 0 0 auto;
    width: 80%;
    height: 100%;
    scroll-snap-align: start;
    padding-left: 20px;
`;

const ImgStyled = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

function App() {
    const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    return (
        <div>
            <TitleStyled>Scroll Snap API</TitleStyled>
            <ScrollStyled>
                {imgs.map((img) => (
                    <ContentStyled>
                        <ImgStyled src={`images/${img}`} alt={img} />
                    </ContentStyled>
                ))}
            </ScrollStyled>
        </div>
    );
}

export default App;
