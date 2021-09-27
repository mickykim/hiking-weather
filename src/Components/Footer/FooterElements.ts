import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme.black};
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding: 3rem 1rem;
`;

export const LinkContainer = styled.div``;

export const LinkWrapper = styled.div``;

export const LinkMenu = styled.ul``;

export const LinkTitle = styled.h1``;

export const FooterLink = styled(Link)``;
