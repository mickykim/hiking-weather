import styled from "styled-components";

import { Props } from "./index";

export const InfoContainer = styled.div<Props>`
    color: #000;
    background: ${(props) =>
        props.colorTheme ? props.theme.lightgrey : props.theme.neutral};
`;

export const InfoWrapper = styled.div`
    display: grid;
    height: 820px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export const Row = styled.div<Props>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-items: center;
    align-items: center;

    grid-template-areas: ${(props) =>
        props.reverse ? `"col1 col2"` : `"col2 col1"`};

    @media screen and (max-width: 768px) {
        grid-template-areas: "col1" "col2";
        padding-top: 1rem;
        min-height: 500px;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 1rem;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    padding-bottom: 4rem;
    max-width: 540px;
    @media screen and (max-width: 768px) {
        padding-bottom: 1.5rem;
    }
`;

export const TopText = styled.p<Props>`
    color: ${(props) => props.theme.secondaryText};
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    /* margin-left: ${(props) => (props.reverse ? "-10px" : "10px")}; */
    margin-left: -1rem;

    @media screen and (max-width: 768px) {
        margin-left: -0.5rem;
    }
`;

export const Heading = styled.h1<Props>`
    display: inline-block;
    color: ${(props) => props.theme.primaryText};
    background: linear-gradient(
        -100deg,
        white 0%,
        ${(props) =>
                props.colorTheme ? props.theme.primary : props.theme.orange}
            90%,
        white 100%
    );
    background-size: 100% 120%;
    background-position: 0 60%;
    background-repeat: no-repeat;
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.2rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2.4rem;
        margin-bottom: 1.2rem;
    }
`;

export const Subtitle = styled.h2<Props>`
    color: ${(props) => props.theme.primaryText};
    font-weight: 300;
    font-size: 1.6rem;
    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 550px;

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`;

export const Img = styled.img`
    width: 100%;
`;
