import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    display: grid;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.primary};
    transition: all 0.3s ease-in-out;
    top: ${(props) => (props.isOpen ? "0" : "-100%")};
    opacity: ${(props) => (props.isOpen ? "100%" : "0")};
`;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CloseIcon = styled(FaTimes)``;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    color: ${(props) => props.theme.primaryText};
    cursor: pointer;
`;
export const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 5rem);
    text-align: center;

    /* @media screen and (max-width: 480px) {
        grid-template-rows: repeat(7, 60px);
    } */
`;

export const ScrollLink = styled(LinkScroll)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
    color: ${(props) => props.theme.primaryText};
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.secondaryText};
    }
`;
export const Spacing = styled.div`
    grid-row: 1 / span 1;
    height: 100%;
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonLink = styled(LinkRouter)`
    border-radius: 3rem;
    padding: 1rem 4rem;

    transition: all 0.3s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.primaryText};
    background: ${(props) => props.theme.secondary};

    &:hover {
        color: ${(props) => props.theme.black};
        background: ${(props) => props.theme.neutral};
    }
`;
