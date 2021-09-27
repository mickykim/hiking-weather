import styled from "styled-components";
import { Props } from "./index";

export const CardSectionContainer = styled.div`
    background-color: ${(props) => props.theme.primary};
    width: 100%;
    height: 700px;
`;

// TODO: Need to change this to a grid
export const CardSectionWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem;

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto auto;
    row-gap: 1rem;
    justify-content: space-around;
    align-items: center;
`;

export const PrimaryInfo = styled.div`
    grid-row: 1;
    grid-column: 1 / span 4;
`;
export const SecondaryInfo = styled.div`
    display: flex;

    justify-content: center;

    grid-row: 2;
    grid-column: 1 / span 4;
`;
