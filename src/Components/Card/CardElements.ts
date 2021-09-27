import styled from "styled-components";
import { Props } from "./index";

export const CardContainer = styled.div`
    color: ${(props) => props.theme.primaryTextDark};
    width: 100%;
    height: 100%;
`;

export const CardWrapper = styled.div<Props>`
    width: ${(props) => (props.xl ? "100%" : "200px")};
    height: ${(props) => (props.xl ? "250px" : "200px")};
    padding: 1.5rem;
    transition: all 300ms ease-in-out 0s;
    border-radius: 20px;

    background: ${(props) =>
        props.shaded
            ? `linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.4) 100%
        ),${props.theme.secondary}`
            : `${props.theme.secondary}`};

    &:hover {
        transform: ${(props) => (props.xl ? "" : "scale(1.03)")};
    }

    &:after {
        box-shadow: ${(props) => `${props.theme.grey} 0rem 0.3rem 1rem`};
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-areas: "image" "content";
`;

export const Content = styled.div`
    grid-area: content;
    z-index: 1;
`;

export const ImgWrapper = styled.div<Props>`
    display: ${(props) => (props.img ? "inline" : "none")};
    max-width: 336px;
    height: 180px;
    grid-area: image;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Heading = styled.h1`
    font-size: 1.5rem;
`;

export const Subtitle = styled.h2`
    font-size: 1rem;
`;
