import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrapper,
    LinkContainer,
    LinkWrapper,
    LinkMenu,
    LinkTitle,
    FooterLink,
    SocialMediaWrapper,
    Logo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
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
                                <LinkTitle>About Us</LinkTitle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Air Quality</FooterLink>
                                <FooterLink to="/">Quality Index</FooterLink>
                                <FooterLink to="/">More Information</FooterLink>
                            </LinkMenu>
                            <LinkMenu>
                                <LinkTitle>Data</LinkTitle>
                                <FooterLink to="/">Our API</FooterLink>
                                <FooterLink to="/">3rd Party API</FooterLink>
                                <FooterLink to="/">Services</FooterLink>
                                <FooterLink to="/">Verification</FooterLink>
                            </LinkMenu>
                        </LinkWrapper>
                        <LinkWrapper>
                            <LinkMenu>
                                <LinkTitle>Contact Us</LinkTitle>
                                <FooterLink to="/">Email</FooterLink>
                                <FooterLink to="/">Phone</FooterLink>
                                <FooterLink to="/">Location</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                            </LinkMenu>
                            <LinkMenu>
                                <LinkTitle>Social Media</LinkTitle>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                            </LinkMenu>
                        </LinkWrapper>
                    </LinkContainer>
                    <SocialMediaWrapper>
                        <Logo to="">HikingWeather</Logo>
                        <WebsiteRights>
                            HikingWeather © {new Date().getFullYear()} All
                            rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="/"
                                aria-label="Facebook"
                                target="_blank"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                aria-label="Instagram"
                                target="_blank"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                aria-label="Twitter"
                                target="_blank"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                aria-label="Youtube"
                                target="_blank"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default Footer;
