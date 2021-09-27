import styled from "styled-components";
import { Props } from "./index";

export const SearchbarContainer = styled.div<Props>`
    display: ${(props) => (props.active ? "flex" : "none")};
    align-items: flex-end;
    width: 100%;
    max-width: 650px;
    margin: 0 1rem;
`;
export const SearchbarInput = styled.input<Props>`
    width: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: ${(props) => (props.lg ? "1.25rem 1.25rem" : "0.55rem 0.75rem")};
    line-height: 1.3rem;
    border: none;
    font-size: 1.1rem;
    background-color: ${(props) => props.theme.neutral};
    max-height: 350px;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 768px) {
        line-height: 1rem;
        padding: ${(props) => (props.lg ? "1.25rem 1.25rem" : "0.4rem 0.8rem")};
    }
`;

export const ButtonContainer = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 100%;
    padding: ${(props) => (props.lg ? "1.25rem" : "0.7rem 0.75rem")};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: 1.3rem;
    background-color: ${(props) => props.theme.neutral};
    max-height: 350px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: ${(props) =>
            props.lg ? "1.25rem 1.25rem" : "0.55rem 0.5rem"};
    }
`;
