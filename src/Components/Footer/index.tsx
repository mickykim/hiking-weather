import React from "react";
import {
    FooterContainer,
    FooterWrapper,
    LinkContainer,
    LinkWrapper,
    LinkMenu,
    LinkTitle,
    FooterLink,
} from "./FooterElements";

export interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <LinkContainer>
                        <LinkWrapper>
                            <LinkMenu>
                                <LinkTitle>
                                    LinkTitle
                                    <FooterLink>Link</FooterLink>
                                </LinkTitle>
                            </LinkMenu>
                        </LinkWrapper>
                    </LinkContainer>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default Footer;
